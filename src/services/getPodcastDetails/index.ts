import axios from "axios"
import { DetailsProps } from "./types"

const getPodcastDetails = async () => {
  return axios
    .get(
      "https://api.allorigins.win/get?charset=ISO-8859-1&url=https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20"
    )
    .then((response) => {
      return JSON.parse(response.data.contents) as DetailsProps
    })
    .catch((error) => {
      return error
    })
}

export default getPodcastDetails
