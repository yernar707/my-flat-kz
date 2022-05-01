import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react";


export default function Second({ children }) {

    const [first, firstShown] = useState(false);
    const [second, secondShown] = useState(false);
    const [third, thirdShown] = useState(false);
    const [fourth, fourthShown] = useState(false);
  return (
      <div id="services" className="second">
      <div className="paragraph-title">
          <p>Наши услуги</p>
      </div>
        <div className="body-back">
            <div className="services-container">
                <div className="service-row">
                    <div className="service-card col-3" onMouseEnter={() => firstShown(true)}
                            onMouseLeave={() => firstShown(false)}>
                        <p className="service-card-title">Онлайн покупка недвижимости</p>
                        
                        <StaticImage
                            className="service-img"
                            src="../images/services/unsplash_Hcfwew744z4.png"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                        {first && (<div className={`service-card-back first-service `}>
                            <div className="dark-bck">
                                <div className="service-card-back-text">
                                    <p className="service-card-title">Купить квартиру не выходя из дома?</p>
                                    <p className="service-card-text">
                                        Да!<br></br>
                                        С нами Вы можете купить недвижимость онлайн.
                                        Мы гарантируем полную прозрачность и контроль на каждом этапе сделки.
                                    </p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="service-card col-3"  onMouseEnter={() => secondShown(true)}
                            onMouseLeave={() => secondShown(false)}>
                        <p className="service-card-title">Консультация и подбор недвижимости</p>
                        
                        <StaticImage
                            className="service-img"
                            src="../images/services/unsplash_HJckKnwCXxQ.png"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                        {second && (<div className={`service-card-back second-service `}>
                            <div className="dark-bck">
                                <div className="service-card-back-text">
                                    <p className="service-card-title">Консультация и подбор недвижимости</p>
                                    <p className="service-card-text">
                                        При покупке квартиры всегда выбирайте проверенные компании чтобы в итоге не получить "Кота в мешке". Наши специалисты являются профессионалами своего дела, с многолетним опытом работы. Мы готовы проконсультировать и подобрать Вам недвижимость Вашей мечты!
                                    </p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="service-card col-3"  onMouseEnter={() => thirdShown(true)}
                            onMouseLeave={() => thirdShown(false)}>
                        <p className="service-card-title">Организация тура для клиентов</p>
                        
                        <StaticImage
                            className="service-img"
                            src="../images/services/unsplash_dRHE-XF7wls.png"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                        {third && (<div className={`service-card-back third-service `}>
                            <div className="dark-bck">
                                <div className="service-card-back-text">
                                    <p className="service-card-title">А как? А что? А где?</p>
                                    <p className="service-card-text">
                                        Специально для Вас мы подготовили программу ознакомительного тура с проживанием в комфортных апартаментах. Ваш личный менеджер, расскажет и покажет все объекты недвижимости. Вы сможете познакомиться с культурой и объектами достопримечательностей, с головой окунётесь в местный колорит.  Вы сможете выбрать наиболее подходящий объект, который в последующем станет Вашим «домом мечты»!
                                    </p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <div className="service-card col-3"  onMouseEnter={() => fourthShown(true)}
                            onMouseLeave={() => fourthShown(false)}>
                        <p className="service-card-title">Безопасный перевод денежных средств</p>
                        <StaticImage
                            className="service-img"
                            src="../images/services/unsplash_Q59HmzK38eQ.png"
                            width={300}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt="A Gatsby astronaut"
                        />
                        
                        {fourth && (<div className={`service-card-back fourth-service `}>
                            <div className="dark-bck">
                                <div className="service-card-back-text">
                                    <p className="service-card-title">Безопасный перевод денежных средств</p>
                                    <p className="service-card-text">Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах</p>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
                <div className="bottom-triangles">
                    <div className="left-triangle"></div>
                    <div className="right-triangle"></div>
                </div>
        </div>    
      </div>

  )
}
