import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import NumberFormat from 'react-number-format';



class Catalog extends React.Component {

	constructor(props) {
		super(props);
	
		console.log(this.props)
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
			console.log(json);
		})
	}

	render(){
		const { data } = this.props
		console.log(data)
		const { loading, fetchedData } = this.state;
		return (
			<>
				<div className="body-back services-container">
					<Link
					to="/app/new-house/"
					>	Добавить дом +</Link>
					<div className="service-row">
						
						{fetchedData.map(house =>{
							if(house.name !== "")
								return (<div className="col-4 house-card" key={house.id}>
								<div className="house-card-inner">
									{/* <GatsbyImage className="house-img" src={house.mainImage.url} image={house.mainImage.gatsbyImageData} alt={house.houseName} /> */}
									
									<StaticImage  className="house-img"
										alt="asd"
										src="../images/konak_premium.png"
										formats={["auto", "webp", "avif"]}
									/>
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
										<button>Удалить</button>
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

export default Catalog;
