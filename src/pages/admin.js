import React from "react"
import { Link } from "gatsby"
import { isLoggedIn } from "../services/auth"

import Layout from "../components/admin-layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="admin-page-title">AdminPage MyFlatKz</h1>
      <p style={{textAlign: `center`}}>
        {isLoggedIn() ? (
          <div className="admin-links">
            <Link to="/app/catalog">Каталог</Link>
            <Link to="/app/smi">СМИ</Link>
          </div>
        ) : (
          <>
            Вам надо <Link to="/app/login">авторизoваться</Link>
          </>
        )}
      </p>
    </Layout>
  )
}
