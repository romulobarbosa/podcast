import axios from "axios"

import { Podcast, PodcastApi } from "./types"

const getPodcastsList = async () => {
  return await axios
    .get(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )
    .then((response) => {
      const fullList = response.data.feed.entry as PodcastApi[]
      // axios
      //   .get(
      //     "https://itunes.apple.com/lookup?id=1535809341&media=podcast&entity=podcastEpisode&limit=20"
      //   )
      //   .then((response) => {
      //     console.log(response.data)
      //   })

      const list: Podcast[] = fullList.reduce((tempList: Podcast[], cur) => {
        const currendPodcast: Podcast = {
          title: `${cur.title.label}`,
          author: cur["im:artist"].label,
          cover: cur["im:image"][2].label,
          summary: cur.summary.label,
          id: cur.id.attributes["im:id"],
        }
        return [...tempList, currendPodcast]
      }, [])

      return list
    })
    .catch((error) => {
      return error
    })
}

export default getPodcastsList
