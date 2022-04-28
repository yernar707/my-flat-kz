import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Second from "../components/second"
import Filter from "../components/filter"
import PostService from "../components/postService"
import Questions from "../components/questions"
import Houses from "../components/houses"
import Smi from "../components/smi"





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
          <Questions></Questions>
        </Layout>
    )
}

export default HomePage