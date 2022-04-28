import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image"

const HousePage = ({ data }) => {

    const { houseName, district } = data.graphCmsHouse;

    return(
        <Layout>
          <Seo title="MYFLAT.KZ" />
            <div className="intro">
              <div className="house-body-back">
                  <div className="house-back">
                      <div className='absolute dark-bck'>

                      </div>
                      <StaticImage 
                        alt="asd"
                        className="house-back-img"
                        src="../images/konak_garden_life_bck.png"
                        formats={["auto", "webp", "avif"]}
                      />
                      <div className="house-content ">
                          <h1>
                            {houseName}
                          </h1>
                          <p>
                          Мы строим для вас комфортный и уютный комплекс, в котором есть все необходимое для вашего отдыха: море, солнце и красивая природа. Проект комплекса Konak Garden Life строится на площади 3.642 м2 и состоит из одного блока
                          </p>
                      </div>
                  </div>
              </div>
            </div>
            <div className='house-info'>
              <div className='house-body-back blue'>
                      <div className="house-info-text">
                        <div className='col-6'> 
                          <p>
                          Стоимость от<br></br>
                          <b>60.000 евро (1+1)<br></br>
                          90.000 евро (2+1)</b><br></br>
                          <br></br>
                          Сдача проекта <b>Август-Сентябрь 2021</b><br></br>
                          <br></br>
                          Пример инвестиционного проекта:<br></br>
                          Сдача в аренду<br></br>
                          <b>1+1 ( 400 евро/месяц)</b> не сезон или при долгосрочной аренде<br></br>
                          <b>1+1 ( 700 евро/месяц)</b> в сезон помесячно<br></br>
                          <b>2+1 ( 700 евро/месяц)</b> не сезон или при долгосрочной аренде<br></br>
                          <b>2+1 ( 1000 евро/месяц)</b> в сезон помесячно<br></br>
                          <br></br>
                          Цены на квартиры возрастут после сдачи объекта на 15%!
                          Пример : Соответственно если квартира стоимостью 60.000 евро вырастет до 69.000 евро с данного этапа строительства, выгода в 15% без дополнительных вложений</p>
                        </div>
                        <div className='col-6'> 
                          <StaticImage 
                            alt="asd"
                            src="../images/second_image.png"
                            formats={["auto", "webp", "avif"]}
                          />
                        </div>
                      </div>
              </div>
            </div>
            <div className="third-block">
              <div className="house-body-back">
                  <div className="house-back">
                      <div className='absolute dark-bck'>

                      </div>
                      <StaticImage 
                        alt="asd"
                        className="house-back-img"
                        src="../images/intersect.png"
                        formats={["auto", "webp", "avif"]}
                      />
                      <div className="house-content ">
                          <p>
                            Мы строим для вас комфортный и уютный комплекс, в котором есть все необходимое для вашего отдыха: море, солнце и красивая природа. Проект комплекса Konak Garden Life строится на площади 3.642 м2 и состоит из одного блока. Из больших окон квартир и балконов открывается замечательный вид на море и горы.
                          </p>
                      </div>
                      <div className="bottom-triangles">
                          <div className="left-triangle"></div>
                          <div className="right-triangle"></div>
                      </div>
                  </div>
                  
              </div>
              
            </div>
            <div className="fourth-block">
              <div className="house-body-back" style={{position: `relative`}}>
                      <div className='house-info-text'>
                        <div className='col-4'>
                          <StaticImage 
                            alt="asd"
                            src="../images/fourth-1.png"
                            formats={["auto", "webp", "avif"]}
                          />
                        </div>
                        <div className='col-4'>
                          В квартирах: стальные двери, домофон с видеосистемой. Подвесные потолки и точечное скрытое освещение. Моющаяся краска на стенах и полах из гранита первого класса. Фарфор, керамика и разработка дизайнеров кухонь и ванных комнат. ПВХ окна и двери на балкон с двойным остеклением и шумоизоляцией.
                        </div>
                        <div className='col-4'>
                          <StaticImage 
                            alt="asd"
                            src="../images/fourth-2.png"
                            formats={["auto", "webp", "avif"]}
                          />
                        </div>
                      </div>
                      <div className="bottom-triangles">
                          <div className="left-triangle"></div>
                          <div className="right-triangle"></div>
                      </div>
                  
              </div>
              
            </div>
            <div className="fifth-block">
              <div className="house-body-back blue" style={{position: `relative`}}>
                    <div className="top-triangles">
                        <div className="left-triangle"></div>
                        <div className="right-triangle"></div>
                    </div>
                      <div className='house-gallery'>
                        <div className='col-12'>
                          <h2>Зона текст</h2>
                        </div>
                        <div className='col-12 house-images'>
                          <div className='col-6'>
                            <StaticImage 
                              title='Хамам'
                              alt="asd"
                              src="../images/HAMAM.png"
                              formats={["auto", "webp", "avif"]}
                            />
                          </div>
                          <div className='col-6 four-image'>
                            <div className='col-12 two-image'>
                            <StaticImage 
                              alt="asd"
                              src="../images/15.png"
                              formats={["auto", "webp", "avif"]}
                            />
                            <StaticImage 
                              alt="asd"
                              src="../images/ILIKLIK 5.png"
                              formats={["auto", "webp", "avif"]}
                            />
                            </div>
                            <div className='col-12 two-image'>
                            <StaticImage 
                              alt="asd"
                              src="../images/ILIKLIK 1.png"
                              formats={["auto", "webp", "avif"]}
                            />
                            <StaticImage 
                              alt="asd"
                              src="../images/14.png"
                              formats={["auto", "webp", "avif"]}
                            />
                            </div>

                          </div>
                        </div>
                      </div>
                  
              </div>
              
            </div>
            <div className="last-block">
              <div className="house-body-back">
                  <div className="house-back" style={{height: 500}}>
                      <div className='absolute dark-bck'>

                      </div>
                      <StaticImage 
                        alt="asd"
                        className="house-back-img"
                        src="../images/last.png"
                        formats={["auto", "webp", "avif"]}
                      />
                      <div className="top-last-triangle">
                          <div className="left-triangle"></div>
                      </div>
                  </div>
                  
              </div>
              <div className='distance-text service-row'>
                  <div className='col-6'>
                    <h2>Расстояние до</h2>
                    <p>
                    До центра Аланьи - 15 км.<br></br>
                    До аэропорта Газипаша - 15 км.<br></br>
                    До Анталии - 150 км.<br></br>

                    </p>
                  </div>
                  <div className='col-6'>
                    <h2>Квартиры</h2>
                    <p>
                      84 квартиры:<br></br>
                      1 + 1,2 + 1 (45–70 кв.м)<br></br>
                      2 + 1 и 3 + 1 пентхаус (125 кв.м - 175 кв.м)<br></br>
                      (1 + 1 44 шт.)<br></br>
                      (2 + 1 33 шт.) (2 + 1 дуплекс 2 шт.) (3 + 1 дуплекс 5 шт.)<br></br>

                    </p>

                  </div>
              </div>
            </div>
        </Layout>
    )
};

export const pageQuery = graphql`
  query HousePageQuery($slug: String) {
    graphCmsHouse(slug: {eq: $slug})  {
        houseName
        district
    }
  }
`;

export default HousePage;