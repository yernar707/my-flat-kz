import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import NumberFormat from 'react-number-format';
import Slider from "react-slick"

const settings = {
	dots: false,
	infinite: true,
	autoplay: true,
}


class HousePage extends React.Component {

	constructor(props) {
		super(props);
	}
	
	state = {
		loading: true,
		fetchedData: [],
	}
	componentDidMount() {
		fetch("https://my--flat.herokuapp.com/api/v1/house/list/")
		.then(response => {
			return response.json();
		})
		.then(json => {
			this.setState({
				loading: false,
				fetchedData: json
			})
		})
	}

	render(){
		const { data } = this.props
		const { loading, fetchedData } = this.state;
		return (
			<>
				<div className="body-back services-container">
					<div className="service-row">
						
						{fetchedData.map(house =>{
							if(house.name !== "")
								return (<div className="col-4 house-card" key={house.id}>
								<div className="house-card-inner">
									<Slider {...settings} className="overflow-hidden flat-slider">
	 										<StaticImage
												className="service-img"
												src="../flat/konak_garden_life.png"
												width={300}
												quality={95}
												formats={["auto", "webp", "avif"]}
												alt="A Gatsby astronaut"
											/>
											<StaticImage
												className="service-img"
												src="../flat/konak_green_towers.png"
												width={300}
												quality={95}
												formats={["auto", "webp", "avif"]}
												alt="A Gatsby astronaut"
											/>
											<StaticImage
												className="service-img"
												src="../flat/konak_premium.png"
												width={300}
												quality={95}
												formats={["auto", "webp", "avif"]}
												alt="A Gatsby astronaut"
											/>
										</Slider>
									<div className="house-card-text">
										<p className="house-card-title">{house.name} </p>
										<NumberFormat
											value={house.priceTenge}
											displayType={'text'}
											thousandSeparator={` `}
											suffix={`€`}
											renderText={(value, props) => <p className="house-card-price euro-price" {...props}>{value}</p>}
										/>
										<NumberFormat
											value={house.priceEuro}
											displayType={'text'}
											thousandSeparator={` `}
											suffix={`₸`}
											renderText={(value, props) => <p className="house-card-price tenge-price" {...props}>{value}</p>}
										/>
										<p className="house-card-district">{`${house.city}`}</p>
									</div>
								</div>
						</div>)
						})}
					</div>
				</div>
			</>
		)
	}
};

export default HousePage;

// const HousePage = () => {
//     const { houses } = useStaticQuery(pageQuery);
// 	return (
// 		<div className="houses">
// 			<div className="body-back services-container">
// 				<div className="service-row">
// 					{ houses.nodes.map (({ slug, ...house }) => (
// 						<div className="col-4 house-card" key={slug}>
// 							<Link to={`/houses/${slug}`}>
// 								<div className="house-card-inner" onMouseEnter={Autoplay} onMouseLeave={() => settings.autoplay = false}>
// 									<Slider {...settings} className="overflow-hidden flat-slider">
// 										<StaticImage
// 											className="service-img"
// 											src="../flat/konak_garden_life.png"
// 											width={300}
// 											quality={95}
// 											formats={["auto", "webp", "avif"]}
// 											alt="A Gatsby astronaut"
// 										/>
// 										<StaticImage
// 											className="service-img"
// 											src="../flat/konak_green_towers.png"
// 											width={300}
// 											quality={95}
// 											formats={["auto", "webp", "avif"]}
// 											alt="A Gatsby astronaut"
// 										/>
// 										<StaticImage
// 											className="service-img"
// 											src="../flat/konak_premium.png"
// 											width={300}
// 											quality={95}
// 											formats={["auto", "webp", "avif"]}
// 											alt="A Gatsby astronaut"
// 										/>
// 									</Slider>
									
// 									<GatsbyImage className="house-img" src={house.mainImage.url} image={house.mainImage.gatsbyImageData} alt={house.houseName} />
// 									<div className="house-card-text">
// 										<p className="house-card-title">{house.houseName} </p> 
// 										<NumberFormat 
// 											value={house.price[0]} 
// 											displayType={'text'} 
// 											thousandSeparator={` `} 
// 											suffix={`€`}
// 											renderText={(value, props) => <p className="house-card-price euro-price" {...props}>{value}</p>}
// 										/>
// 										<NumberFormat 
// 											value={house.price[1]} 
// 											displayType={'text'} 
// 											thousandSeparator={` `} 
// 											suffix={`₸`}
// 											renderText={(value, props) => <p className="house-card-price tenge-price" {...props}>{value}</p>}
// 										/>
// 										<p className="house-card-district">{`${house.district}`}</p>
// 									</div>
// 								</div>
// 							</Link>
// 						</div>
// 					))}
// 				</div>
// 			</div> 
// 			<div className="show-more">
// 				<Link to="all-houses">
// 					Показать еще...
// 				</Link>
// 			</div> 
//         </div>
// 	)
// };

// export default HousePage;

// export const pageQuery = graphql `
// 	{
// 		housesfrom: allGraphCmsHouse (limit: 6) {
// 			nodes{
// 				houseName
// 				price
// 				slug
// 				district
// 				mainImage {
// 				  gatsbyImageData
// 				  url
// 				}
// 			}
// 		}
// 	}
// `
