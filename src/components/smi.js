import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";

export const pageQuery = graphql `
	{
		smi: allGraphCmsArticle {
			nodes{
                links
				slug
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
    const [modal, setModal] = useState("");
    const { smi } = useStaticQuery(pageQuery);
	return (
        <div id="smi" className="smi">
            <div className="body-back services-container smi-container">
                    <div className="paragraph-title">
                        <p>СМИ о нас</p>
                    </div>
                    <div className="smi-text">
                    </div>
                    <Slider {...settings} className="overflow-hidden">
                        { smi.nodes.map (({ slug, ...article }) => (
                              <div className="slider-container" key={article.id}>
                                  <div className="slider-inner container">
                                      <div className="slider-row">
                                        <div className="col-7">
                                            <p className="slider-text">
                                                {article.title}
                                            </p>
                                            <div className="slider-portal">
                                                <p style={{marginBottom: 0}}>Ссылки на источники:</p>
                                                {
                                                    article.links.map( link => {
                                                        return (<div key={`${article.id}${link}`}><a href={link}>{link}</a><br></br></div>)
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
                                      <a className='smi-more' onClick={() => {setModal(`${article.id}`)} }>Читать полностью</a>
                                  </div>
                              </div>
                        ))}
                    </Slider>
                </div>
                { smi.nodes.map (({ slug, ...article }) => (
                    modal === (article.id) ? <div className="modal-order dark-bck" key={`${article.id}-modal`}>
                        <div className='smi-modal'>
                            <span onClick={() => setModal("")} style={{position: `absolute`, cursor: `pointer`, fontSize: 24, top: 15, right: 20, color: `#000`}}>×</span>
                            {<h3 dangerouslySetInnerHTML={{ __html: article.title }} />}
                            <StaticImage 
                                src='../bg/5f3e59d8-364c-4d91-8446-5d616b5795f6.jpg'
                                width={200}
                                style={{margin:`auto`}}
                                quality={95}
                            />
                            <div><br></br>
                                {<p dangerouslySetInnerHTML={{ __html: article.text }} />}
                            </div>
                            <div>   
                                {
                                    article.links.map( link => {
                                        return (<div key={`${article.id}${link}-modal`}><a href={link}>{link}</a><br></br></div>)
                                    })
                                }
                            </div>
                        </div>
                    </div> : <div></div>
                ))}
          </div>
	)
};

export default SmiPage;