import { request } from 'graphql-request';
import useSWR from 'swr';
import React from 'react';
import { Link, GatsbyImage } from 'gatsby';
import NumberFormat from 'react-number-format';

function House({ id, houseName, price, slug, district, mainImage }) {
  const { data, mutate } = useSWR(
    [
      `query houseData($id: ID!) {
        oneHouse: graphCmsHouse(id: $id) {
          nodes {
            houseName
            price
            slug
            district
            mainImage {
                gatsbyImageData
                url
            }
            id
          }
        }
      }`,
      id,
    ],
    (query, id) =>
      request(
        'https://api-ap-south-1.graphcms.com/v2/cl2hdu51w41ef01z625ez3rdh/master',
        query,
        { id }
      ),
    { revalidateOnFocus: false }
  );

  async function handleClick() {
    const newHouseName = 'new name';

    mutate(
      { ...data, oneHouse: { nodes: { houseName: newHouseName } } },
      false
    );

    await fetch('/api/createHouse', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
  }

  return (
    <React.Fragment>      
      <div className="col-4 house-card" key={slug}>
          <div className="house-card-inner">
            <GatsbyImage className="house-img" src={mainImage.url} image={mainImage.gatsbyImageData} alt={houseName} />
            <div className="house-card-text">
              <p className="house-card-title">{houseName} </p> 
              <NumberFormat 
                value={price[0]} 
                displayType={'text'} 
                thousandSeparator={` `} 
                suffix={`€`}
                renderText={(value, props) => <p className="house-card-price euro-price" {...props}>{value}</p>}
              />
              <NumberFormat 
                value={price[1]} 
                displayType={'text'} 
                thousandSeparator={` `} 
                suffix={`₸`}
                renderText={(value, props) => <p className="house-card-price tenge-price" {...props}>{value}</p>}
              />
              <p className="house-card-district">{`${district}`}</p>
            </div>
            <div className='house-card-buttons'>
              <button onClick={handleClick} >Удалить</button>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default House;
