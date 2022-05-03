import { useLocation } from "react-router-dom";
import React from 'react'
import { Link, navigate } from "gatsby";

class NewHouse extends React.Component{ 
  constructor(props){
    super(props);
    this.imgList = [];
    this.addImg = this.addImg.bind(this);
    this.displayImg = this.displayImg.bind(this);
  }


 state = {
   added : false,   
 }

  addImg(event){
    event.preventDefault();
    const imgUrl = this.image.value;
    if(imgUrl.length > 0)
      this.imgList.push(imgUrl);
    this.image.value = "";
    this.setState({added: true});
  };

  displayImg(){this.imgList.forEach(img => {
      let imgUrl = img.replace('file/d/', 'uc?export=view&id=');
      imgUrl = imgUrl.replace('/view', '');
      imgUrl = imgUrl.replace('?usp=sharing', '');
      return (<div>
        <img height={220} key={img} src={imgUrl} alt={img}/>
      </div>)
    })
  }



  
  render(){
    const { house } = window.history.state
    const edit = (event) => {
        console.log(this.name.value)
        event.preventDefault()
        fetch(`https://my--flat.herokuapp.com/api/v1/house/update/` + house.id, {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "name": this.name.value + "-UNPUBLISHED",
                "address": this.address.value,
                "houseType": this.houseType.value,
                "area" : this.area.value,
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
            window.location.href = "/app/catalog/"
        )
        .catch((err) => console.log(err));
    }
    return(
      <div className='new-house-form'>
        <h4>Редактировать дом id={house.id}</h4>
        <form onSubmit={(event) => edit(event)}>
          <table>
            <tbody>
              <tr>
                <td>Название дома</td>
                <td><input  ref={(ref) => {this.name = ref}} defaultValue={house.name.replace("-UNPUBLISHED", "")}  type="text" name="name" id="name" /></td>
              </tr>
              <tr>
                <td>Адрес</td>
                <td><input  ref={(ref) => {this.address = ref}}  defaultValue={house.address}  type="text" name="address" id="address" /></td>
              </tr>
              <tr>
                <td>Тип недвижимости</td>
                <td>
                  <select ref={(ref) => {this.houseType = ref}}  defaultValue={house.houseType}>
                    <option value="flat">Квартира</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Площадь</td>
                <td><input ref={(ref) => {this.area = ref}} defaultValue={house.area}  type="number" name="are" id="area" /></td>
              </tr>
              <tr>
                <td>До моря:</td>
                <td><input ref={(ref) => {this.toSea = ref}} defaultValue={house.toSea}  type="number" name="toSea" id="toSea" /></td>
              </tr>
              <tr>
                <td>До центра:</td>
                <td><input ref={(ref) => {this.toCenter = ref}} defaultValue={house.toCenter}  type="number" name="toCenter" id="toCenter" /></td>
              </tr>
              <tr>
                <td>До аэропорта:</td>
                <td><input ref={(ref) => {this.toAirport = ref}} defaultValue={house.toAirport}  type="number" name="toAirport" id="toAirport" /></td>
              </tr>
              <tr>
                <td>Год постройки:</td>
                <td><input ref={(ref) => {this.constructionYear = ref}} defaultValue={house.constructionYear}  type="number" name="constructionYear" id="constructionYear" /></td>
              </tr>
              <tr>
                <td>Мебель</td>
                <td>
                  <select ref={(ref) => {this.furniture = ref}}  defaultValue={house.furniture} >
                    <option value="yes">Да</option>
                    <option value="no">Нет</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Цена в евро</td>
                <td><input ref={(ref) => {this.priceeu = ref}}  defaultValue={house.priceEuro}  type="number" name="euroPrice" id="euroPrice" /></td>
              </tr>
              <tr>
                <td>Цена в долларах</td>
                <td><input ref={(ref) => {this.priceusd = ref}} defaultValue={house.priceDollar}  type="number" name="dollarPrice" id="dollarPrice" /></td>
              </tr>
              <tr>
                <td>Цена в тенге</td>
                <td><input ref={(ref) => {this.pricetg = ref}} defaultValue={house.priceTenge}  type="number" name="tengePrice" id="tengePrice" /></td>
              </tr>
              <tr>
                <td>Район</td>
                <td>
                  <select ref={(ref) => {this.district = ref}}  defaultValue={house.city} >
                    <option value="Авсаллар">Авсаллар</option>
                    <option value="Махмутлар">Махмутлар</option>
                    <option value="Каргыджак">Каргыджак</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Количество комнат</td>
                <td>
                  <select ref={(ref) => {this.room = ref}}  defaultValue={house.room} >
                    <option value="1">1 + 1</option>
                    <option value="2">2 + 1</option>
                    <option value="3">3 + 1</option>
                    <option value="4">4 + 1 Duplex</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Картинки</td>
                
                <td><input ref={(ref) => {this.image = ref}}  type="text" name="image" id="image" /> <button onClick={this.addImg}>Add image</button></td>
                <td>
                  <div>
                    {this.state.added && this.imgList.forEach(img => {
                        let imgUrl = img.replace('file/d/', 'uc?export=view&id=');
                        imgUrl = imgUrl.replace('/view', '');
                        imgUrl = imgUrl.replace('?usp=sharing', '');
                        return <img height={220} key={img} src={imgUrl} alt={img}/>
                      })
                    }
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                    <div className="service-row">
                        {
                            house.images.map(img => {
                                let imgUrl = img.replace('file/d/', 'uc?export=view&id=');
                                imgUrl = imgUrl.replace('/view', '');
                                imgUrl = imgUrl.replace('?usp=sharing', '');
                                return <div className="col-4" style={{position: `relative`, padding: 15}}>
                                    <img key={img} src={imgUrl} alt={house.name}/>
                                    <button style={{position:`absolute`, top: 5, right: 5}}>×</button>
                                </div>
                            })
                        }
                    </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Сохранить"/> <Link to="/app/catalog">Отменить</Link></td>
              </tr>
            </tbody>
          </table>
          
          
        </form>
      </div>
    );
  }

}

export default NewHouse