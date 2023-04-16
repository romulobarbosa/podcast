import Input from "../Input"

import "./styles.css"

const Filter = () => {
  const handleInputChange = (inputVal: string) => {
    console.log(inputVal)
  }
  return (
    <div className="filter">
      <span className="filter__total-number">100</span>
      <div className="filter__input">
        <Input
          placeholder="Filter podcasts..."
          className="filter"
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}

export default Filter
