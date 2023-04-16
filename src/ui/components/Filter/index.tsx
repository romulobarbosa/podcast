import React from "react"
import Input from "../Input"
import type { FilterProps } from "./types"

import "./styles.css"

const Filter: React.FunctionComponent<FilterProps> = ({ totalItems }) => {
  const handleInputChange = (inputVal: string) => {
    console.log(inputVal)
  }
  return (
    <div className="filter">
      {totalItems && (
        <span className="filter__total-number" data-testid="total-number">
          {totalItems}
        </span>
      )}
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
