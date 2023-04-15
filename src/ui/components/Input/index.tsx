import React from "react"
import classNames from "classnames"

import { InputProps } from "./types"

import "./styles.css"

const Input: React.FC<InputProps> = ({ placeholder, className }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames("input", className)}
    />
  )
}

export default Input
