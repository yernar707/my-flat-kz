import React from 'react'
import { Link } from 'gatsby'
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
		disableDeploy: false
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
		const unpublished = fetchedData.filter((house) => house.name.includes("-UNPUBLISHED"));
		const deploy = (arr) => {
			if (window.confirm('Процесс займет некоторое время и перезагрузит сайт. Вы согласны?')) {
				Promise.all(arr.map(house => {
					console.log(house.id)
					const newName = house.name.replace("-UNPUBLISHED", "");
					return fetch(`https://my--flat.herokuapp.com/api/v1/house/update/` + house.id, {
						method: 'PUT',
						headers: {'Content-Type':'application/json'},
						body: JSON.stringify({
							"name": newName
						})
						}).catch((err) => console.log(err));
				})).then(() =>{
					window.location.reload()
					// fetch("https://api.netlify.com/build_hooks/62703127f5017d093cccd294", {	//test
					fetch('https://api.netlify.com/build_hooks/62703a0f7f6bca0f07d7be1f', {	//main
						method: 'post'
					})
				})
			  } else {
			  }
		}
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
		
		

		// unpublished.length == 0 ? this.setState({disableDeploy:true}) : this.setState({disableDeploy:false}); 

		return (
			<>
				<div className="body-back services-container">
					<div style={{width: 800, margin:`auto`, paddingBottom: 30, display:`flex`, justifyContent:`space-between`}}>
						<Link
						to="/app/new-house/"
						>	Добавить дом +</Link>
						{unpublished.length > 0 ? <button onClick={() => deploy(unpublished)} >Применить изменения</button> : <button disabled >Применить изменения</button>}
						
					</div>
					{ unpublished.length == 0 && <h3 style={{textAlign: `center`}}>Изменения внесены</h3>}
					{unpublished.length > 0 && <div className="service-row">
						<div className='col-12'>
							<h3>Изменения</h3>
						</div>
						{unpublished.map((house, index) =>{
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
											<p className="house-card-title">{house.name.replace("-UNPUBLISHED", "")} </p>
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
					</div>}
					<div className="service-row">
						<div className='col-12'>
							<h3>На сайте</h3>
						</div>
						{fetchedData.map((house, index) =>{
							if(house.name !== "" && !house.name.includes("-UNPUBLISHED"))
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
