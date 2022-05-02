import React from 'react';


class App extends React.Component {
	state = {
		loading: true,
		fetchedData: [],
	}
	componentDidMount() {
		fetch("https://my--flat.herokuapp.com/api/v1/request/list/")
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
	render() {
		const { fetchedData } = this.state;
		return (
			<div>
				<table style={{width:1000, margin:`auto`}}>
					<tr>
						<th>
							Имя
						</th>
						<th>
							Номер телефона
						</th>
						<th>
							Сообщение
						</th>
					</tr>
					{fetchedData.map(request =>{
						if(request.name !== "")
							return (<tr key={request.id}>
										<td>{request.name}</td>
										<td>{request.phoneNumber}</td>
										<td>{request.message}</td>
									</tr>)
						
					})}
				</table>
			</div>
		)
	}
}

export default App;