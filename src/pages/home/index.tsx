import { useEffect, useState } from "react"
import getPodcastsList from "../../services/getPodcastsList"
import Filter from "../../ui/components/Filter"

import PodcastCard from "./components/PodcastCard"
import type { Podcast } from "../../services/getPodcastsList/types"
import "./styles.css"

const HomePage = () => {
  const [podcastList, setPodcastList] = useState<Podcast[]>([])

  useEffect(() => {
    getPodcastsList().then((response) => {
      setPodcastList(response)
    })
  }, [])

  return (
    <div id="page-home" className="home">
      <div className="home__filter">
        <Filter totalItems={podcastList.length} />
      </div>

      {podcastList && (
        <div className="podcasts">
          <ul className="podcasts__list">
            {podcastList.map((podcast, index) => (
              <li
                className="podcasts__list-item"
                key={`${index}-${podcast.title}`}
              >
                {
                  <PodcastCard
                    title={podcast.title}
                    author={podcast.author}
                    cover={podcast.cover}
                  />
                }
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default HomePage
