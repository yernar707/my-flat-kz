import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"
import Second from "../components/second"
import Filter from "../components/filter"
import PostService from "../components/postService"
import Houses from "../components/houses_local"
import Smi from "../components/smi"

const HomePage = () => {
    return (
        <Layout>
          <Seo title="MYFLAT.KZ" />
          <Intro></Intro>
          <Second></Second>
          <Filter></Filter>
          <Houses></Houses>
          <PostService></PostService>
          <Smi></Smi>
        </Layout>
    )
}

export default HomePage