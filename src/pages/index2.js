import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/admin-layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="MYFLAT.KZ" />
    <div className="white-logo">
      <h1>MYFLAT.KZ</h1>
    </div>
    <div className="container question">
      <div className="row align-items-end">
        <div className="col-lg-2">
          <p>
            <Link to="/">Home</Link> <br />
          </p>
        </div>
        <div className="col-lg-8">
          <h1>Вы хотите купить мечту?</h1>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div className="col-lg-2">
          <p>
            <Link to="/">Home</Link> <br />
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
