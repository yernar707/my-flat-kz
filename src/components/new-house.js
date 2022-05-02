import React from 'react'

function deploy() {
  fetch('http://localhost:8000/__refresh', {
    method: 'post'
  }).then(
    console.log("done")
  ).catch(
    (err) =>  console.log(err)
  )
  // fetch("https://my--flat.herokuapp.com/api/v1/house/list/")
  // .then(response => {
  //   return response.json();
  // })
  // .then(json => {
  //   const newId = json[json.length - 1].id;
  //   const path = require('path');
  //   exports.createPages = async ({ graphql, actions }) => {
  //     actions.createPage({
  //       path: `/houses/${newId}`,
  //       component: path.resolve(`./src/templates/FlatPage.js`),
  //       context: { newId },
  //     })
  //   }
  // })
}

class NewHouse extends React.Component{ 
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.imgList = [];
    this.addImg = this.addImg.bind(this);
    this.displayImg = this.displayImg.bind(this);
  }

 state = {
   added : false
 }

 handleSubmit(event){ 
  event.preventDefault();
  fetch('https://my--flat.herokuapp.com/api/v1/house/new/', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    mode: 'cors',
    body: JSON.stringify({
    "name": this.name.value,
    "address": this.address.value,
    "houseType": this.houseType.value,
    "area" : this.area.value,
    "address": this.address.value,
    "toSea" : this.toSea.value,
    "toCenter" : this.toCenter.value,
    "constructionYear" : this.constructionYear.value,
    "furniture" : this.furniture.value,
    "toAirport" : this.toAirport.value,
    "priceEuro" : this.priceeu.value,
    "priceTenge" : this.pricetg.value,
    "priceDollar" : this.priceusd.value,
    "city" : this.district.value,
    "room" : this.room.value,
    "images" : this.imgList
    })
  })
  .then(
    alert(this.name.value + " добавлен"),
    // window.location.reload()
  // )
  // .then(
  //   window.location.reload(),
  ).then(
    deploy()
  )
  .catch((err) => console.log(err));
 };

  addImg(event){
    event.preventDefault();
    const imgUrl = this.image.value;
    if(imgUrl.length > 0)
      this.imgList.push(imgUrl);
    this.image.value = "";
    console.log(this.imgList);
    this.setState({added: true});
  };

  displayImg(){this.imgList.forEach(img => {
      let imgUrl = img.replace('file/d/', 'uc?export=view&id=');
      imgUrl = imgUrl.replace('/view', '');
      imgUrl = imgUrl.replace('?usp=sharing', '');
      console.log(imgUrl)
      return (<div>
        <img height={220} key={img} src={imgUrl} alt={img}/>
      </div>)
    })
  }



  
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
                <td>Адрес</td>
                <td><input  ref={(ref) => {this.address = ref}}  type="text" name="address" id="address" /></td>
              </tr>
              <tr>
                <td>Тип недвижимости</td>
                <td>
                  <select ref={(ref) => {this.houseType = ref}}  defaultValue={`flat`}>
                    <option value="flat">Квартира</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Площадь</td>
                <td><input ref={(ref) => {this.area = ref}} type="number" name="are" id="area" /></td>
              </tr>
              <tr>
                <td>До моря:</td>
                <td><input ref={(ref) => {this.toSea = ref}} type="number" name="toSea" id="toSea" /></td>
              </tr>
              <tr>
                <td>До центра:</td>
                <td><input ref={(ref) => {this.toCenter = ref}} type="number" name="toCenter" id="toCenter" /></td>
              </tr>
              <tr>
                <td>До аэропорта:</td>
                <td><input ref={(ref) => {this.toAirport = ref}} type="number" name="toAirport" id="toAirport" /></td>
              </tr>
              <tr>
                <td>Год постройки:</td>
                <td><input ref={(ref) => {this.constructionYear = ref}} type="number" name="constructionYear" id="constructionYear" /></td>
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
                <td>Цена в евро</td>
                <td><input ref={(ref) => {this.priceeu = ref}} type="number" name="euroPrice" id="euroPrice" /></td>
              </tr>
              <tr>
                <td>Цена в долларах</td>
                <td><input ref={(ref) => {this.priceusd = ref}} type="number" name="dollarPrice" id="dollarPrice" /></td>
              </tr>
              <tr>
                <td>Цена в тенге</td>
                <td><input ref={(ref) => {this.pricetg = ref}} type="number" name="tengePrice" id="tengePrice" /></td>
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
                <td>Фотография</td>
                <td><input ref={(ref) => {this.image = ref}}  type="text" name="image" id="image" /> <button onClick={this.addImg}>Add image</button></td>
                <td>
                  <div>
                    {this.state.added && this.imgList.forEach(img => {
                        let imgUrl = img.replace('file/d/', 'uc?export=view&id=');
                        imgUrl = imgUrl.replace('/view', '');
                        imgUrl = imgUrl.replace('?usp=sharing', '');
                        console.log(imgUrl)
                        return <img height={220} key={img} src={imgUrl} alt={img}/>
                      })
                    }
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Добавить"/> <input type="reset" value="Очистить" /></td>
              </tr>
            </tbody>
          </table>
          
          
        </form>
      </div>
    );
  }

}

export default NewHouse