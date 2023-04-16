import React from "react"
import type { PodcastCardProps } from "./types"

import "./styles.css"

const PodcastCard: React.FC<PodcastCardProps> = ({ title, author, cover }) => {
  return (
    <div className="podcast">
      <div
        className="podcast__cover"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
      <h3 className="podcast__title">{title}</h3>
      {author && (
        <span className="podcast__author" data-testid="podcast-author">
          Author: <span>{author}</span>
        </span>
      )}
    </div>
  )
}

export default PodcastCard
