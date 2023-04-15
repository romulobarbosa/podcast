import { Outlet } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div>Podcaster</div>
      <Outlet />
    </>
  )
}

export default Header
