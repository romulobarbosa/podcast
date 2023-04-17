import React from "react"
import Input from "../Input"
import type { FilterProps } from "./types"

import "./styles.css"

const Filter: React.FunctionComponent<FilterProps> = ({
  totalItems,
  onChange,
}) => {
  return (
    <div className="filter">
      <span className="filter__total-number" data-testid="total-number">
        {totalItems}
      </span>
      <div className="filter__input">
        <Input
          placeholder="Filter podcasts..."
          className="filter"
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Filter
