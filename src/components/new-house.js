import React from 'react'



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
    "area" : this.area.value,
    "furniture" : this.furniture.value,
    "priceDollar" : this.priceusd.value,
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
            <tbody>
              <tr>
                <td>Название дома</td>
                <td><input  ref={(ref) => {this.name = ref}}  type="text" name="name" id="name" /></td>
              </tr>
              <tr>
                <td>Район</td>
                <td>
                  <select ref={(ref) => {this.district = ref}}  defaultValue={`Авсалар`}>
                    <option value="Авсалар">Авсалар</option>
                    <option value="Махмутлар">Махмутлар</option>
                    <option value="Каргыджак">Каргыджак</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Количество комнат</td>
                <td>
                  <select ref={(ref) => {this.room = ref}} defaultValue={`1`}>
                    <option value="1">1 + 1</option>
                    <option value="2">2 + 1</option>
                    <option value="3">3 + 1</option>
                    <option value="4">4 + 1 Duplex</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Цена в евро</td>
                <td><input ref={(ref) => {this.priceeu = ref}} type="number" name="euroPrice" id="euroPrice" /></td>
              </tr>
              <tr>
                <td>Цена в долларах</td>
                <td><input ref={(ref) => {this.priceusd = ref}} type="number" name="euroPrice" id="euroPrice" /></td>
              </tr>
              <tr>
                <td>Цена в тенге</td>
                <td><input ref={(ref) => {this.pricetg = ref}} type="number" name="tengePrice" id="tengePrice" /></td>
              </tr>
              <tr>
                <td>Площадь</td>
                <td><input ref={(ref) => {this.area = ref}} type="number" name="tengePrice" id="tengePrice" /></td>
              </tr>
              <tr>
                <td>Мебель</td>
                <td>
                  <select ref={(ref) => {this.furniture = ref}} defaultValue={`1`}>
                    <option value="yes">Да</option>
                    <option value="no">Нет</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Фотография</td>
                <td><input  ref={(ref) => {this.image = ref}}  type="file" name="image" id="image" /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Добавить"/> <input type="reset" value="Очистить" /></td>
              </tr>
            </tbody>
          </table>
          
          
        </form>
      </div>
    )
  }
}

export default NewHouse