import React from "react"
import { Link } from "react-router-dom"

import type { PodcastCardProps } from "./types"

import "./styles.css"

const PodcastCard: React.FC<PodcastCardProps> = ({
  title,
  author,
  cover,
  id,
}) => {
  return (
    <Link to={`podcast/${id}`} className="podcast">
      <div
        className="podcast__cover"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
      <h3 className="podcast__title">{title}</h3>
      <span className="podcast__author" data-testid="podcast-author">
        Author: <span>{author}</span>
      </span>
    </Link>
  )
}

export default PodcastCard
