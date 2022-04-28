import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const Catalog = () => {
    const { adminsmi } = useStaticQuery(pageQuery);
	return (
		<>
			<div className="body-back services-container">
				<div className="service-row">
					{ adminsmi.nodes.map (({ slug, ...mention }) => (
						<div className="col-4 house-card" key={slug}>
								<div className="house-card-inner">
									<GatsbyImage className="house-img" src={mention.image.url} image={mention.image.gatsbyImageData} alt={mention.text} />
									<div className="house-card-text">
										<p className="house-card-title">{slug}</p>
										<p className="house-card-district">{mention.text}</p>
									</div>
								</div>
						</div>
					))}
				</div>
			</div> 
    </>
	)
};

export default Catalog;

export const pageQuery = graphql `
	{
		adminsmi: allGraphCmsArticle {
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
