import { Outlet } from "react-router-dom"

import "./styles.css"

const Header = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h2 className="header__title">Podcaster</h2>
      </header>
      <Outlet />
    </div>
  )
}

export default Header
