import React from "react"
import classNames from "classnames"

import type { InputProps } from "./types"

import "./styles.css"

const Input: React.FC<InputProps> = ({ placeholder, className, onChange }) => {
  return (
    <input
      type="text"
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={classNames("input", className)}
    />
  )
}

export default Input
