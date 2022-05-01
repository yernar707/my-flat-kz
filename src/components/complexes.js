import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';


export const pageQuery = graphql `
    {
        complexes: allMarkdownRemark(filter: {frontmatter: {type: {eq: "complex"}}}) {
        nodes {
            frontmatter {
                title
                slug
            }
        }
        }
    }
  
`

const HousePage = () => {
    const { complexes } = useStaticQuery(pageQuery);
	return (
        <div className='dropdown-links' style={{
            display: `flex`,
            flexDirection: `column`
        }}>
        {complexes.nodes.map (house =>        
            <Link key={house.frontmatter.slug} to={house.frontmatter.slug}>
                {house.frontmatter.title}
            </Link>
        )}
        </div>

	)
};

export default HousePage;
