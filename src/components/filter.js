import React from "react"



export default function Filter({ children }) {


  return (
      <div className="filter">
        <div className="filter-inner">
          <div className="body-back dark-bck">
              <div className="services-container">
                <div className="service-row filter-text align-items-center">
                  <div className="row col-8 justify-content-end">
                    <input 
                      type={`text`}
                      placeholder={`Напишите`}
                    ></input>
                  </div>
                  <div className="col-4" style={{display: `flex`, justifyContent: `center`}}>
                    <button className="search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                      Поиск
                    </button>
                  </div>
                </div>

                <div className="filter-settings">
                  <p>Настройки фильтра</p>
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
                      <select defaultValue={`Default`}>
                        <option value="Default" disabled>Валюта</option>
                        <option value="tenge">Тенге</option>
                        <option value="euro">Евро</option>
                      </select>
                    </div>
                  </div>
                </div>
              
              </div>
          </div>    
        </div>
      </div>
      

  )
}
