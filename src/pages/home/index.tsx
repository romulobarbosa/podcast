import { useEffect, useState } from "react"

import getPodcastsList from "../../services/getPodcastsList"
import Filter from "../../ui/components/Filter"

import PodcastCard from "./components/PodcastCard"
import type { Podcast } from "../../services/getPodcastsList/types"
import "./styles.css"

const HomePage = () => {
  const [podcastList, setPodcastList] = useState<Podcast[]>([])
  const [podcastListToShow, setPodcastListToShow] = useState<Podcast[]>([])
  const [searchTerm, setSearchTerm] = useState("million")

  useEffect(() => {
    getPodcastsList().then((response) => {
      setPodcastList(response)
      setPodcastListToShow(response)

      window.localStorage.setItem("podcastsList", JSON.stringify(response))
      window.localStorage.setItem("lastRequestTime", JSON.stringify(new Date()))
    })
  }, [])

  useEffect(() => {
    const newList = podcastList.filter(
      (pd) =>
        pd.author
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        pd.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    )

    setPodcastListToShow(newList)
  }, [searchTerm])

  return (
    <div id="page-home" className="home">
      <div className="home__filter">
        <Filter
          totalItems={podcastListToShow.length}
          onChange={setSearchTerm}
        />
      </div>

      {podcastListToShow && (
        <div className="podcasts">
          <ul className="podcasts__list">
            {podcastListToShow.map((podcast, index) => (
              <li
                className="podcasts__list-item"
                key={`${index}-${podcast.title}`}
              >
                {
                  <PodcastCard
                    title={podcast.title}
                    author={podcast.author}
                    cover={podcast.cover}
                    id={podcast.id}
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
