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
	autoplaySpeed: 1200,
	easing: `ease-in-out`,
	speed: 800,
	fade: true,
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
		const published = fetchedData.filter((house) => !house.name.includes("-UNPUBLISHED"));
		// let toShow = 6;
		// fetchedData.length >= 6 ? toShow = 6 : toShow = fetchedData.length;
		return (
			<>
				<div className="body-back services-container">
					<div className="service-row">
						{/* {fetchedData.slice(fetchedData.length - toShow).map((house, index) =>{ */}
						{published.map((house, index) =>{ 
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
														{
															house.images && house.images.map(img => {
																let imgUrl = img.replace('file/d/', 'uc?export=view&id=');
																imgUrl = imgUrl.replace('/view', '');
																imgUrl = imgUrl.replace('?usp=sharing', '');
																return <img height={220} key={img} src={imgUrl} alt={house.name}/>
															})
														}
													</Slider>
												<div className="house-card-text">
													<p className="house-card-title">{house.name} </p>
													<p className="house-card-district">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
															<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
															<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
														</svg>
														{`${house.city}`}
													</p>
													<p className="house-card-district">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
															<path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
															<path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
														</svg>
														Тип недвижимости: Квартира
													</p>
													<p className="house-card-district">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
															<path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
															<path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
														</svg>
														Комнатность: {house.room} + 1
													</p>
													<p className="house-card-district">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
															<path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
														</svg>
														Площадь: {house.area ? house.area : `224`}
													</p>
													<NumberFormat
														value={house.priceEuro}
														displayType={'text'}
														thousandSeparator={` `}
														suffix={`€`}
														renderText={(value, props) => <p className="house-card-price euro-price" {...props}>{value}</p>}
													/>
													<NumberFormat
														value={house.priceDollar ? house.priceDollar : house.priceEuro}
														displayType={'text'}
														thousandSeparator={` `}
														suffix={`$`}
														renderText={(value, props) => <p className="house-card-price dollar-price" {...props}>{value}</p>}
													/>
													<NumberFormat
														value={house.priceTenge}
														displayType={'text'}
														thousandSeparator={` `}
														suffix={`₸`}
														renderText={(value, props) => <p className="house-card-price tenge-price" {...props}>{value}</p>}
													/>
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