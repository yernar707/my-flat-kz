import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import NumberFormat from 'react-number-format';
import Slider from "react-slick"

const settings = {
	dots: false,
	infinite: true,
	slickPause: true,
	autoplay: false,
	autoplaySpeed: 1000,
	easing: `ease-in-out`,
	speed: 400,
}

const play = (key, arr) => {
	arr[key].slickPlay();
	arr[key].slickNext();
}

const pause = (key, arr) => {
	arr[key].slickPause();
	arr[key].slickGoTo(0);
}

class HousePage extends React.Component {

	constructor(props) {
		super(props);
		this.accordionContent = [];
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
		const { fetchedData } = this.state;
		return (
			<>
				<div className="body-back services-container">
					<div className="service-row">
						{fetchedData.map((house, index) =>{
							if(house.name !== "") 
								return (
									<div className="col-4 house-card" key={house.id}>
										<Link to={`/houses/${house.id}`}>
											<div 
												onMouseEnter={() =>{
													play(index, this.accordionContent)
												}} 
												onMouseLeave={() =>{
													pause(index, this.accordionContent);
												}} 
												className="house-card-inner">
												<Slider ref={accordionContent => this.accordionContent[index] = accordionContent} {...settings} className="overflow-hidden flat-slider">
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
										</Link>
									</div>
								)
						})}
					</div>
				</div>
			</>
		)
	}
};

export default HousePage;