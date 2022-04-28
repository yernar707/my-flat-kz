import React from "react"
import { useState } from "react";


export default function Intro({ children }) {
    const [modal, isShown] = useState(false);
  return (
      <div id="second" className="intro">
        <div className="body-back hello-text">
            <div className="ordinary">
                <div className="intro-text">
                    <h1>
                        MYFLAT -
                    </h1>
                    <h1>
                        недвижимость в Турции
                    </h1>
                    <hr
                        style={{
                            width: 765,
                            height: 0,
                            border: `1px solid #FFFFFF`,
                            opacity: 1,
                        }}     
                    ></hr>
                    <p>
                        Отличное решение для комфортной жизни и<br></br> выгодного
                        инвестирования!
                    </p>
                    <button className="order" 
                        style={{
                            padding: `0.5rem 1.6rem 0.5rem 1.6rem`,
                            border: `none`,
                            background: `linear-gradient(86.24deg, #E3BB2C -10.22%, #B48B0F 25.3%, #E3BB2C 46.91%, #9C7300 71.52%, #E3BB2C 107.9%)`,
                            fontWeight: 500,
                            fontSize: `16px`,
                            fontFamily: `SF UI Display`,
                            
                        }}
                        onClick={() => isShown(!modal)}
                    >
                        Связаться с нами 
                    </button>
                </div>
            </div>
        </div>
        { modal && (<div className="modal-order dark-bck" 
                        onClick={() => isShown(false)}>
                <form >
                    <h3>Оставить заявку</h3>
                    <table>
                        <tr>
                            <input type="text" placeholder="Имя" name="name"></input>
                        </tr>
                        <tr>
                            <input type="text" placeholder="Номер телефона" name="phone"></input>
                        </tr>
                        <tr>
                            <textarea placeholder="Сообщение" rows={5} name="message"></textarea>
                        </tr>
                        <tr>
                            <input type="submit" placeholder="Сообщение" name="message"></input>
                        </tr>
                    </table>
                </form>
            </div>)
        }
        
      </div>

  )
}
