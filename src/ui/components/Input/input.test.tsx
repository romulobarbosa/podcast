import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

import Input from "./"

const onCLickFunction = jest.fn()

describe("input", () => {
  it("should render correctly", () => {
    render(
      <Input
        placeholder="placeholder test"
        className="class-test"
        onChange={onCLickFunction}
      />
    )

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass("class-test")
    expect(screen.getByPlaceholderText("placeholder test")).toBeInTheDocument()
  })

  it("should change value and call onChange function", () => {
    render(
      <Input
        placeholder="placeholder test"
        className="class-test"
        onChange={onCLickFunction}
      />
    )

    const input = screen.getByRole("textbox") as HTMLInputElement

    fireEvent.change(input, { target: { value: "search value" } })
    expect(input.value).toBe("search value")
    expect(onCLickFunction).toBeCalledTimes(1)
    fireEvent.change(input, { target: { value: "new search value" } })
    expect(input.value).toBe("new search value")
    expect(onCLickFunction).toBeCalledTimes(2)
  })
})
