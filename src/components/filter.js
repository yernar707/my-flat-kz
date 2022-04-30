import React from "react";
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';

function log(value) {
  console.log(value); //eslint-disable-line
}

class Filter extends React.Component {
  state = {
    sliderEuroValues: [0, 980000],
    sliderTengeValues: [0, 98000000],
    currency: 'Default'
  };

  currencyChange = currency => {
    console.log(currency.target.value);
    const newCurrency = currency.target.value;
    this.setState({ currency : newCurrency });
  }

  handleEuroChange = sliderEuroValues => {
    console.log(sliderEuroValues);
    this.setState({ sliderEuroValues });
  };

  handleTengeChange = sliderTengeValues => {
    console.log(sliderTengeValues);
    this.setState({ sliderTengeValues });
  };

  render() {     
    const { sliderEuroValues, sliderTengeValues, currency } = this.state;
    return (
      <div className="filter" id="houses">
        <div className="filter-inner">
          <div className="body-back dark-bck">
              <div className="services-container">

                <div className="filter-settings">
                  <div className="service-row filter-options">
                    <div className="col-3 filter-select">
                      <select defaultValue={`Default`}>
                        <option value="Default" disabled>Количество комнат</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    <div className="col-3 filter-select">
                      <select defaultValue={`Default`}>
                        <option value="Default" disabled>Выберите район</option>
                        <option value="Район 1">Район 1</option>
                        <option value="Район 2">Район 2</option>
                        <option value="Район 3">Район 3</option>
                        <option value="Район 4">Район 4</option>
                        <option value="Район 5">Район 5</option>
                      </select>
                    </div>
                    <div className="col-3 filter-select">
                      <select defaultValue={`Default`}>
                        <option value="Default" disabled>Сортировать по</option>
                        <option value="asc-price">Возрастанию цены</option>
                        <option value="desc-price">Убыванию цены</option>
                      </select>
                    </div>
                    <div className="col-3 filter-select">
                      <select value={this.state.currency} onChange={this.currencyChange}>
                        <option value="Default" disabled>Валюта</option>
                        <option value="Default">По умолчанию</option>
                        <option value="tenge">Тенге</option>
                        <option value="euro">Евро</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                
                <div className="service-row filter-text align-items-center" style={{marginBottom: 50}}>
                    <div className="col-12" style={{marginBottom: 15}}>
                      { currency === 'euro'  && 
                        <div><Slider 
                        range 
                        min={0}
                        max={980000}
                        allowCross={false} 
                        defaultValue={sliderEuroValues} 
                        onChange={this.handleEuroChange} 
                        trackStyle={{background:`#FFF`, height: 6}}
                        handleStyle={{border: `1px solid #FFF`, background:`#141B2D`, opacity: 1, zIndex: 999, width: 25, height: 25, marginTop: `-10px`}}
                        railStyle={{background:`#777`, height: 6}}
                      /> <div className="col-12" style={{textAlign:`center`, color: `#FFF`}}>Ценовой диапазон: {sliderEuroValues[0]}€ - {sliderEuroValues[1]}€</div>
                      </div>}
                        { currency === 'tenge'  && <div><Slider 
                          range 
                          min={0}
                          max={98000000}
                          allowCross={false} 
                          defaultValue={sliderTengeValues} 
                          onChange={this.handleTengeChange} 
                          trackStyle={{background:`#FFF`, height: 6}}
                          handleStyle={{border: `1px solid #FFF`, background:`#141B2D`, opacity: 1, zIndex: 999, width: 25, height: 25, marginTop: `-10px`}}
                          railStyle={{background:`#777`, height: 6}}
                        /><div className="col-12" style={{textAlign:`center`, color: `#FFF`}}>Ценовой диапазон: {sliderTengeValues[0]}₸ - {sliderTengeValues[1]}₸</div>
                        </div>}
                        {currency === "Default" && <div><Slider 
                        style={{opacity: 0}}
                          range 
                          min={0}
                          max={98000000}
                          allowCross={false} 
                          defaultValue={sliderTengeValues} 
                          onChange={this.handleTengeChange} 
                          trackStyle={{background:`#FFF`, height: 6}}
                          handleStyle={{border: `1px solid #FFF`, background:`#141B2D`, opacity: 1, zIndex: 999, width: 25, height: 25, marginTop: `-10px`}}
                          railStyle={{background:`#777`, height: 6}}
                        /><div className="col-12" style={{textAlign:`center`, color: `#FFF`}}>Ценовой диапазон: Выберите валюту</div>
                        </div>}
                    </div> </div>
                <div className="service-row filter-text align-items-center">
                  <div className="col-12" style={{display: `flex`, justifyContent: `center`}}>
                    <button className="search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                      Поиск
                    </button>
                  </div>
                </div>
              
              </div>
          </div>    
        </div>
      </div>
    )
  }
}

export default Filter;
