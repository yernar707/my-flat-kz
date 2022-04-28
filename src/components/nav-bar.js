import React from "react"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "../services/auth"

export default function NavBar() {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `MyFlatKz`
  } else {
    greetingMessage = "You are not logged in"
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
      className="admin-nav"
    >
      <span>{greetingMessage}</span>
      <nav>
        <Link to="/">На главный экран</Link>
        {` `}
        <Link to="/app/catalog">Каталог</Link>
        {` `}
        <Link to="/app/smi">СМИ</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Выйти
          </a>
        ) : null}
      </nav>
    </div>
  )
}
