import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import getPodcastDetails from "../../services/getPodcastDetails"

import "./styles.css"

const InternalPage = () => {
  const [trackCount, setTrackCount] = useState<number>()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`episode/13`)
  }

  useEffect(() => {
    getPodcastDetails().then((data) => {
      setTrackCount(data.results[0].trackCount)
    })
  }, [])

  return (
    <div id="internal-page" className="internal-page">
      <div className="podcast-internal__box">
        Espisodes: <span>{trackCount}</span>
      </div>

      <div className="podcast-internal__box podcast-internal__table-container">
        <table className="podcast-internal__table">
          <thead>
            <tr className="podcast-internal__table-header">
              <th className="podcast-internal__table-title-header">Title</th>
              <th className="podcast-internal__table-date-header">Date</th>
              <th className="podcast-internal__table-duration-header">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
            <tr
              className="podcast-internal__table-line"
              onClick={() => handleClick()}
            >
              <td className="podcast-internal__table-title">
                Podcast epsode 13 - Title
              </td>
              <td>13/03/2021</td>
              <td>51:13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InternalPage
