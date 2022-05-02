import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import NumberFormat from 'react-number-format';
import Slider from 'react-slick';


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
class Catalog extends React.Component {

	constructor(props) {
		super(props);
		this.del = 0
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

		const get = (event) =>{
			const id = event.target.id
			event.preventDefault();
			fetch(`https://my--flat.herokuapp.com/api/v1/house/delete/${id}`, {//need to change get -> delete
				method: 'delete',
				headers: {'Content-Type':'application/json'},
				mode: 'cors'
			})
			.then(
			  alert(id + " удален"),
			  // window.location.reload()
			)
			.then(
			  window.location.reload(),
			)
		}

		return (
			<>
				<div className="body-back services-container">
					<Link
					to="/app/new-house/"
					>	Добавить дом +</Link>
					<div className="service-row">
						
						{fetchedData.map((house, index) =>{
							if(house.name !== "")
								return (
								<div className="col-4 house-card" key={house.id}>
									<div className="house-card-inner"
										onMouseEnter={() =>{
											play(index, this.accordionContent)
										}} 
										onMouseLeave={() =>{
											pause(index, this.accordionContent);
										}} 
									>
										{/* <GatsbyImage className="house-img" src={house.mainImage.url} image={house.mainImage.gatsbyImageData} alt={house.houseName} /> */}
										
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
										<div className='house-card-buttons'>
											<button id={house.id} onClick={get}>Удалить</button>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</>
		)
	}
};

export default Catalog;
