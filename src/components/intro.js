import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby";
import BackgroundSlider from 'gatsby-image-background-slider'



export default function Intro({ children }) {
    const [modal, setModal] = useState(false);
    const [sent, setSent] = useState(false);
    const nameRef = useRef(null);
    const phoneREf = useRef(null);
    const msgRef = useRef(null);
    
    function handleSubmit(event){ 
        event.preventDefault();
        fetch('https://my--flat.herokuapp.com/api/v1/request/new', {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          mode: 'cors',
          body: JSON.stringify({
          "name": nameRef.current.value,
          "phoneNumber" : phoneREf.current.value,
          "message" : msgRef.current.value,
          })
        }).then(
          setSent(true)
        )
        .catch((err) => console.log(err));
    };

  return (
    <>
        <div id="second" className="intro">
            <div className="body-back hello-text">
                <BackgroundSlider
                    className="intro-background"
                    query={useStaticQuery(graphql`
                        {
                            backgrounds: allFile(filter: {sourceInstanceName: {eq: "backgrounds"}}) {
                                nodes {
                                    relativePath
                                    childImageSharp {
                                        fluid(maxWidth: 4000, quality: 100){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }`)
                    }
                ></BackgroundSlider>
                <div className="ordinary">
                    <div className="intro-text">
                        <h1>
                            MYFLAT -
                        </h1>
                        <h1>
                            недвижимость в Турции
                        </h1>
                        <p>
                            Прямые продажи от застройщика на территории СНГ
                        </p>
                        <hr
                            style={{
                                width: 765,
                                height: 0,
                                border: `1px solid #FFFFFF`,
                                opacity: 1,
                            }}     
                        ></hr>
                        <p>
                            Без комиссий. Без переплат
                        </p>
                        <button className="order" 
                            onClick={() => {setModal(true)}}
                            style={{
                                padding: `0.5rem 1.6rem 0.5rem 1.6rem`,
                                border: `none`,
                                background: `linear-gradient(86.24deg, #E3BB2C -10.22%, #B48B0F 25.3%, #E3BB2C 46.91%, #9C7300 71.52%, #E3BB2C 107.9%)`,
                                fontWeight: 500,
                                fontSize: `16px`,
                                fontFamily: `SF UI Display`,
                                textDecoration: `none`,
                                color: `#000`,
                                cursor: `pointer`,
                            }}
                        >
                            Связаться с нами 
                        </button>
                    </div>
                </div>
                </div>
                
        { modal ? (<div className="modal-order dark-bck" 
            >
            
                <form  onSubmit={handleSubmit} style={{position: `relative`}} >
                    <span onClick={() => setModal(false)} style={{position: `absolute`, cursor: `pointer`, fontSize: 24, top: 15, right: 20, color: `#FFF`}}>×</span>
                    { !sent ?
                    <div>
                        <h3>Оставить заявку</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td><input required ref={nameRef} type="text" placeholder="Имя" name="name"></input></td>
                                </tr>
                                <tr>
                                    <td><input required ref={phoneREf} type="text" placeholder="Номер телефона" name="phone"></input></td>
                                </tr>
                                <tr>
                                    <td><textarea required ref={msgRef} placeholder="Сообщение" rows={5} name="message"></textarea></td>
                                </tr>
                                <tr>
                                    <td><input type="submit"></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </div> : <div></div>
                    }
                    { sent ?
                        <div className="thank-you-msg">
                            <h3>Спасибо! Ваша заявка отправлена</h3>
                            <h3>Наш менеджер свяжется с вами</h3>
                            <button onClick={() => {setSent(false); setModal(false)}}>Хорошо</button>
                        </div>: <div></div>
                    }

                </form>
            </div>) : <div></div>}
        </div>
            

    </>

  )
}
