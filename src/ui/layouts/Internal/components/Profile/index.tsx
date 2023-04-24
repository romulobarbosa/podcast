import React from "react"

import type { ProfileProps } from "./type"

import "./styles.css"

const PodcastProfile: React.FC<ProfileProps> = ({
  cover,
  title,
  summary,
  author,
}) => {
  return (
    <div className="podcast-profile">
      <div className="podcast-profile__cover">
        <img
          src={cover}
          alt="podcast cover image"
          className="podcast-profile__cover-image"
        />
      </div>

      <div className="podcast-profile__rights">
        <div className="podcast-profile__title">
          <h4>{title}</h4>
        </div>
        <div className="podcast-profile__author">
          <span>
            By <span>{author}</span>
          </span>
        </div>
      </div>

      <div className="podcast-profile__summary">
        <p>
          <strong>Description:</strong>
          <span>{summary}</span>
        </p>
      </div>
    </div>
  )
}

export default PodcastProfile
