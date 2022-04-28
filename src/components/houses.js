import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import NumberFormat from 'react-number-format';

export const pageQuery = graphql `
	{
		houses: allGraphCmsHouse (limit: 6) {
			nodes{
				houseName
				price
				slug
				district
				mainImage {
				  gatsbyImageData
				  url
				}
			}
		}
	}
`

const HousePage = () => {
    const { houses } = useStaticQuery(pageQuery);
	return (
		<div id="houses" className="houses">
			<div className="body-back services-container">
				<div className="service-row">
					{ houses.nodes.map (({ slug, ...house }) => (
						<div className="col-4 house-card" key={slug}>
							<Link to={`/houses/${slug}`}>
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
								</div>
							</Link>
						</div>
					))}
				</div>
			</div> 
			<div className="show-more">
				<Link to="all-houses">
					Показать еще...
				</Link>
			</div> 
        </div>
	)
};

export default HousePage;