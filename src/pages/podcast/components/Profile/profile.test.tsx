import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import PodcastProfile from "./"

describe("PodcastProfile", () => {
  it("Should render correcly", () => {
    render(
      <PodcastProfile
        title="Podcast Title"
        author="podcast author"
        cover="coverimageurl"
        summary="podcast summary text"
      />
    )

    expect(screen.getByText("Podcast Title")).toBeInTheDocument()
    expect(screen.getByText("podcast author")).toBeInTheDocument()
    expect(screen.getByAltText("podcast cover image")).toHaveAttribute(
      "src",
      "coverimageurl"
    )
    expect(screen.getByText("podcast summary text")).toBeInTheDocument()
  })
})
