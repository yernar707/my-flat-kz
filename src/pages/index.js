import * as React from "react"
import { withPrefix } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Second from "../components/second"
import Filter from "../components/filter"
import PostService from "../components/postService"
import Questions from "../components/questions"
import Houses from "../components/houses"
import Smi from "../components/smi"
import { Helmet } from "react-helmet"





const HomePage = ({ data }) => {
    return (
        <Layout>
          <Seo title="MYFLAT.KZ" />
          <Intro></Intro>
          <Second></Second>
          <Filter></Filter>
          <Houses></Houses>
          <PostService></PostService>
          <Smi></Smi>
          {/* <div className="smi">
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
                        {smi.map(elem => {
                          const { text, url, portal, image } = elem.frontmatter;
                          const img = getImage(image);
                          return (
                              <div className="slider-container" key={elem.id}>
                                  <div className="slider-inner container">
                                    <StaticImage
                                        src="../images/Group 311.png"
                                        width={57}
                                        quality={100}
                                        formats={["auto", "webp", "avif"]}
                                        alt="A Gatsby astronaut"
                                        style={{ marginBottom: `1.45rem`, position: `absolute`, top: 20 }}
                                    />
                                      <div className="service-row">
                                        <div className="col-7">
                                            <p className="slider-text">
                                                {elem.frontmatter.text}
                                            </p>
                                            <p className="slider-portal">
                                                - Портал "{portal}"
                                            </p>
                                            <a href="{`/${url}`}">Перейти</a>
                                        </div>
                                        <div>
                                            <GatsbyImage className="slider-img" image={img} alt={text} />
                                        </div>
                                      </div>
                                  </div>
                              </div>
                          )
                      })}
                    </Slider>
                </div>
          </div> */}
          <Questions></Questions>
        </Layout>
    )
}

export default HomePage