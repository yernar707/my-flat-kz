import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import NumberFormat from 'react-number-format';


export const pageQuery = graphql `
	{
      catalog: allGraphCmsHouse {
          nodes{
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
    }
`

const Catalog = () => {
  const { catalog } = useStaticQuery(pageQuery);
	return (
		<>
			<div className="body-back services-container">
				<Link
				to="/app/new-house/"
				>	Добавить дом +</Link>
				<div className="service-row">
					{ catalog.nodes.map (({ slug, ...house }) => (
						<div className="col-4 house-card" key={slug}>
								<div className="house-card-inner">
									<GatsbyImage className="house-img" src={house.mainImage.url} image={house.mainImage.gatsbyImageData} alt={house.houseName} />
									<div className="house-card-text">
										<p className="house-card-title">{house.houseName} </p>
										<NumberFormat
											value={house.price[0]}
											displayType={'text'}
											thousandSeparator={` `}
											suffix={`€`}
											renderText={(value, props) => <p className="house-card-price euro-price" {...props}>{value}</p>}
										/>
										<NumberFormat
											value={house.price[1]}
											displayType={'text'}
											thousandSeparator={` `}
											suffix={`₸`}
											renderText={(value, props) => <p className="house-card-price tenge-price" {...props}>{value}</p>}
										/>
										<p className="house-card-district">{`${house.district}`}</p>
									</div>
									<div className='house-card-buttons'>
										<button>Удалить</button>
									</div>
								</div>
						</div>
					))}
				</div>
			</div>
    </>
	)
};

export default Catalog;
