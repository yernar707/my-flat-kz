import React from "react"

import NavBar from "./nav-bar"

const Layout = ({ children }) => (
  <>
    <NavBar />
      <button id="scroll-btn" className="sidebar-btns" title="Scroll to top">
        <div className="front-btn">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#141B2D" fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1ZM8.707 14.207a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 10.914l-3.293 3.293Z" clipRule="evenodd"/></svg>
        </div>
        <div className="back-btn">

        </div>

      </button>
    {children}
  </>
)

export default Layout