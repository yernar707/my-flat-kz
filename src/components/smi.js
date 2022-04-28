import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";

export const pageQuery = graphql `
	{
		smi: allGraphCmsArticle {
			nodes{
				text
				slug
				portal
				image {
				  gatsbyImageData
				  url
				}
			}
		}
	}
`
const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    variableWidth: true,
    arrows: true,
  }


const SmiPage = ({ data }) => {
    const { smi } = useStaticQuery(pageQuery);
	return (
        <div id="smi" className="smi">
            <div className="body-back services-container" style={{paddingBottom: 0,}}>
                    <div className="paragraph-title">
                        <p>СМИ о нас</p>
                    </div>
                    <div className="smi-text">
                        <p>
                            Lorem Ipsum является текст-заполнитель обычно используется в графических, печать и издательской индустрии для предварительного просмотра макета и визуальных макетах
                        </p>
                    </div>
                    <Slider {...settings} className="overflow-hidden">
                        { smi.nodes.map (({ slug, ...article }) => (
                              <div className="slider-container" key={slug}>
                                  <div className="slider-inner container">
                                      <div className="service-row">
                                        <div className="col-7">
                                            <p className="slider-text">
                                                {article.text}
                                            </p>
                                            <p className="slider-portal">
                                                - Портал "{article.portal}"
                                            </p>
                                            <a href={`${slug}`}>Перейти</a>
                                        </div>
                                        <div className='col-5' style={{
                                            display: `flex`, 
                                            justifyContent: `center`,
                                        }}>
                                            <GatsbyImage className="slider-img" src={article.image.url} image={article.image.gatsbyImageData} alt={article.text} />
                                        </div>
                                      </div>
                                  </div>
                              </div>
                        ))}
                    </Slider>
                </div>
          </div>
	)
};

export default SmiPage;