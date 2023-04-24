import { Outlet, useParams } from "react-router-dom"
import { Podcast } from "../../../services/getPodcastsList/types"
import PodcastProfile from "./components/Profile"

import "./styles.css"

const Internal = () => {
  const { id } = useParams()

  const allPodcats: Podcast[] = JSON.parse(
    window.localStorage.getItem("podcastsList") || ""
  )
  const podcast = allPodcats.find((pd) => pd.id === id)

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
          <Outlet />
        </main>
      )}
    </div>
  )
}

export default Internal
