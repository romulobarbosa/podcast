import Filter from "../../ui/components/Filter"

import "./styles.css"

const HomePage = () => {
  return (
    <div id="page-home" className="home">
      <div className="home__filter">
        <Filter />
      </div>
      <div>HOME PAGE</div>
    </div>
  )
}

export default HomePage
