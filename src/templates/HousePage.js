import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"

const HousePage = ({ data }) => {

    const { houseName, district } = data.graphCmsHouse;



    return(
        <Layout>
          <Seo title="MYFLAT.KZ" />
                <h1>{houseName}</h1>
                <p>{district}</p>
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