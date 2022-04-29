import React from 'react'
import { Link } from 'gatsby'



class NewHouse extends React.Component{ 
  constructor(props){
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleSubmit(event){ 
  event.preventDefault();
  fetch('https://my--flat.herokuapp.com/api/v1/house/new/', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    mode: 'cors',
    body: JSON.stringify({
    "name": this.name.value,
    "priceEuro" : this.priceeu.value,
    "priceTenge" : this.pricetg.value,
    "city" : this.district.value,
    "room" : this.room.value,
    })
  })
  .then(
    alert(this.name.value + " добавлен"),
    window.location.reload()
  )
  .catch((err) => console.log(err));
 };
  
  render(){
    return(
      <div className='new-house-form'>
        <h4>Новый дом</h4>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td>Название дома</td>
              <td><input  ref={(ref) => {this.name = ref}}  type="text" name="name" id="name" /></td>
            </tr>
            <tr>
              <td>Район</td>
              <td><input  ref={(ref) => {this.district = ref}}  type="text" name="name" id="name" /></td>
            </tr>
            <tr>
              <td>Количество комнат</td>
              <td><input ref={(ref) => {this.room = ref}} type="number" name="room" id="room" /></td>
            </tr>
            <tr>
              <td>Цена в тенге</td>
              <td><input ref={(ref) => {this.pricetg = ref}} type="number" name="tengePrice" id="tengePrice" /></td>
            </tr>
            <tr>
              <td>Цена в евро</td>
              <td><input ref={(ref) => {this.priceeu = ref}} type="number" name="euroPrice" id="euroPrice" /></td>
            </tr>
            <tr>
              <td>Фотография</td>
              <td><input  ref={(ref) => {this.image = ref}}  type="file" name="image" id="image" /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Добавить"/> <input type="reset" value="Очистить" /></td>
            </tr>
          </table>
          
          
        </form>
      </div>
    )
  }
}

export default NewHouse