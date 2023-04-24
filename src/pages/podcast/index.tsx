import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import PodcastProfile from "./components/Profile"
import type { Podcast } from "../../services/getPodcastsList/types"
import getPodcastDetails from "../../services/getPodcastDetails"

import "./styles.css"

const PodcastPage = () => {
  const { id } = useParams()
  const [trackCount, setTrackCount] = useState<number>()
  const allPodcats: Podcast[] = JSON.parse(
    window.localStorage.getItem("podcastsList") || ""
  )
  const podcast = allPodcats.find((pd) => pd.id === id)

  useEffect(() => {
    getPodcastDetails().then((data) => {
      setTrackCount(data.results[0].trackCount)
    })
  }, [])

  return (
    <div id="podcast-page" className="podcast-page">
      {!!!podcast ? (
        <div>Not found any podcast with provided ID</div>
      ) : (
        <main className="podcast">
          <PodcastProfile
            cover={podcast.cover}
            author={podcast.author}
            summary={podcast.summary}
            title={podcast.title}
          />
          <div className="podcast-details">
            <div className="podcast-details__box">
              Espisodes: <span>{trackCount}</span>
            </div>

            <div className="podcast-details__box podcast-details__table-container">
              <table className="podcast-details__table">
                <thead>
                  <tr className="podcast-details__table-header">
                    <th className="podcast-details__table-title">Title</th>
                    <th className="podcast-details__table-date">Date</th>
                    <th className="podcast-details__table-duration">
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="podcast-details__table-line">
                    <td>Podcast ep x title</td>
                    <td>13/03/2021</td>
                    <td>51:13</td>
                  </tr>
                  <tr className="podcast-details__table-line">
                    <td>Podcast ep x title</td>
                    <td>13/03/2021</td>
                    <td>51:13</td>
                  </tr>
                  <tr className="podcast-details__table-line">
                    <td>Podcast ep x title</td>
                    <td>13/03/2021</td>
                    <td>51:13</td>
                  </tr>
                  <tr className="podcast-details__table-line">
                    <td>Podcast ep x title</td>
                    <td>13/03/2021</td>
                    <td>51:13</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      )}
    </div>
  )
}

export default PodcastPage
