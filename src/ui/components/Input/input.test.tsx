import { render, screen } from "@testing-library/react"

import Input from "./"

describe("input", () => {
  it("should render correctly", () => {
    render(<Input />)

    expect(screen.getByRole("textbox")).toBeInTheDocument
  })
})
