import React from "react"

import type { ProfileProps } from "./type"

const PodcastProfile: React.FC<ProfileProps> = ({
  cover,
  title,
  summary,
  author,
}) => {
  return (
    <div className="podcast__profile">
      <div className="podcast__profile-cover">
        <img
          src={cover}
          alt="podcast cover image"
          className="podcast__profile-cover-image"
        />
      </div>

      <div className="podcast__profile-rights">
        <div className="podcast__profile-title">
          <h4>{title}</h4>
        </div>
        <div className="podcast__profile-author">
          <span>
            By <span>{author}</span>
          </span>
        </div>
      </div>

      <div className="podcast__profile-summary">
        <p>
          <strong>Description:</strong>
          {summary}
        </p>
      </div>
    </div>
  )
}

export default PodcastProfile
