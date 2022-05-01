import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import Modal from 'react-modal';

export const pageQuery = graphql `
	{
		smi: allGraphCmsArticle {
			nodes{
                links
				slug
				portal
				image {
				  gatsbyImageData
				  url
				}
                text
                title
                id
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
    const [article, setArticle] = useState("");
    const { smi } = useStaticQuery(pageQuery);
	return (
        <div id="smi" className="smi">
            <div className="body-back services-container" style={{paddingBottom: 0,}}>
                    <div className="paragraph-title">
                        <p>СМИ о нас</p>
                    </div>
                    <div className="smi-text">
                    </div>
                    <Slider {...settings} className="overflow-hidden">
                        { smi.nodes.map (({ slug, ...article }) => (
                              <div className="slider-container" key={slug}>
                                  <div className="slider-inner container">
                                      <div className="service-row">
                                        <div className="col-7">
                                            <p className="slider-text">
                                                {article.title}
                                            </p>
                                            <div className="slider-portal">
                                                <p>Ссылки на источники:</p>
                                                {
                                                    article.links.map( link => {
                                                        return (<div key={article.id}><a href={link}>{link}</a><br></br></div>)
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className='col-5' style={{
                                            display: `flex`, 
                                            justifyContent: `center`,
                                        }}>
                                            <GatsbyImage className="slider-img" src={article.image.url} image={article.image.gatsbyImageData} alt={article.text} />
                                        </div>
                                      </div>
                                      <a onClick={() => setArticle(`${slug}-modal`) }>More</a>
                                  </div>
                              </div>
                        ))}
                    </Slider>
                </div>
          </div>
	)
};

export default SmiPage;