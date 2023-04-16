import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import PodcastCard from "./"

describe("PodcastCard", () => {
  it("should render a complete card", () => {
    render(
      <PodcastCard
        title="Podcast Title"
        author="Podcast Author"
        cover="podcastcover"
      />
    )
    expect(screen.getByText("Podcast Title")).toBeInTheDocument()
    expect(screen.getByText("Podcast Author")).toBeInTheDocument()
  })

  it("should render without author", () => {
    render(<PodcastCard title="Podcast Title" />)
    expect(screen.queryByTestId("podcast-author")).toBe(null)
  })
})
