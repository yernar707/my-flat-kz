import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image"

const HousePage = ({ data }) => {

    const { 
      slug, 
      title, 
      first, 
      second, 
      third, 
      fourth, 
      fifth, 
      footerLeft, 
      footerRight, 
      bck
      // secondImg, 
      // thirdImg, 
      // leftImg, 
      // rightImg, 
      // galleryBig, 
      // gallery,
      // bottomImg
    } = data.markdownRemark.frontmatter;

    return(
        <Layout>
          <Seo title="MYFLAT.KZ" />
            <div className="intro">
              <div className="house-body-back">
                  <div className="house-back">
                      <div className='absolute dark-bck'>

                      </div>
                      <GatsbyImage 
                        src={`../images/${bck.relativePath}`} 
                        image={bck.childImageSharp.gatsbyImageData}
                        alt={title}
                        className="house-back-img"
                        formats={["auto", "webp", "avif"]}
                      />
                      <div className="house-content ">
                          <h1>
                            {<div dangerouslySetInnerHTML={{ __html: title }} />}
                          </h1>
                          <p>
                            {<div dangerouslySetInnerHTML={{ __html: first }} />}
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
                            
                            {<div dangerouslySetInnerHTML={{ __html: second }} />}
                            <br></br><br></br>
                            {<div dangerouslySetInnerHTML={{ __html: fifth }} />}
                          </p>    
                        </div>
                        <div className='col-6'> 
                          {/* <GatsbyImage 
                            src={`../images/${secondImg.relativePath}`} 
                            image={secondImg.childImageSharp.gatsbyImageData}
                            alt={title}
                            formats={["auto", "webp", "avif"]}
                          /> */}
                        </div>
                      </div>
              </div>
            </div>
            <div className="third-block">
              <div className="house-body-back">
                  <div className="house-back">
                      <div className='absolute dark-bck'>

                      </div>
                          {/* <GatsbyImage 
                            src={`../images/${thirdImg.relativePath}`} 
                            className="house-back-img"
                            image={thirdImg.childImageSharp.gatsbyImageData}
                            alt={title}
                            formats={["auto", "webp", "avif"]}
                          /> */}
                      <div className="house-content ">
                          <p>
                            {<div dangerouslySetInnerHTML={{ __html: third }} />}
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
                          {/* <GatsbyImage 
                            src={`../images/${leftImg.relativePath}`} 
                            image={leftImg.childImageSharp.gatsbyImageData}
                            alt={title}
                            formats={["auto", "webp", "avif"]}
                          /> */}
                        </div>
                        <div className='col-4' style={{textAlign:`center`}}>
                            {<div dangerouslySetInnerHTML={{ __html: fourth }} />}
                        </div>
                        <div className='col-4'>
                          {/* <GatsbyImage 
                            src={`../images/${rightImg.relativePath}`} 
                            image={rightImg.childImageSharp.gatsbyImageData}
                            alt={title}
                            formats={["auto", "webp", "avif"]}
                          /> */}
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
                            <GatsbyImage
                              style={{height: 580}}
                              src={`../images/${galleryBig.relativePath}`}
                              image={galleryBig.childImageSharp.gatsbyImageData}
                              alt={title}
                              formats={["auto", "webp", "avif"]}
                            />
                          </div>
                          <div className='col-6 four-image'>

                              {/* {console.log("gallery >>", gallery)}
                              {
                                gallery.map(image => {
                                  return <GatsbyImage
                                    key={image.childrenImageSharp[0].id}
                                    style={{width: 270, height: 270}}
                                    src={`../images/${image.childrenImageSharp[0].relativePath}`}
                                    image={image.childrenImageSharp[0].gatsbyImageData}
                                    alt={title}
                                    formats={["auto", "webp", "avif"]}
                                  />
                                })
                              } */}

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
                          {/* <GatsbyImage 
                            src={`../images/${bottomImg.relativePath}`} 
                            className="house-back-img"
                            image={bottomImg.childImageSharp.gatsbyImageData}
                            alt={title}
                            formats={["auto", "webp", "avif"]}
                          /> */}
                      <div className="top-last-triangle">
                          <div className="left-triangle"></div>
                      </div>
                  </div>
                  
              </div>
              <div className='distance-text service-row'>
                  <div className='col-6'>
                    <h2>Расстояние до</h2>
                    <p>
                      {<div dangerouslySetInnerHTML={{ __html: footerLeft }} />}
                    </p>
                  </div>
                  <div className='col-6'>
                    <h2>Квартиры</h2>
                    <p>
                      {<div dangerouslySetInnerHTML={{ __html: footerRight }} />}
                    </p>

                  </div>
              </div>
            </div>
        </Layout>
    )
};

export const pageQuery = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        third
        title
        fourth
        footerLeft
        footerRight
        first
        second
        fifth
        bck {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt(truncate: true)
    }
  }
`;

export default HousePage;
