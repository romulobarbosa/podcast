import Input from "../Input"

import "./styles.css"

const Filter = () => {
  return (
    <div className="filter">
      <span className="filter__total-number">100</span>
      <div className="filter__input">
        <Input placeholder="Filter podcasts..." className="filter" />
      </div>
    </div>
  )
}

export default Filter
