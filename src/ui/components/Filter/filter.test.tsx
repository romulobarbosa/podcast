import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import Filter from "./"

describe("Filter", () => {
  it("should render with total value", () => {
    render(<Filter totalItems={13} onChange={console.log} />)

    expect(screen.getByText("13")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

  it("should render without total value", () => {
    render(<Filter totalItems={13} onChange={console.log} />)

    expect(screen.queryByTestId("total-number")).toBe(null)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })
})
