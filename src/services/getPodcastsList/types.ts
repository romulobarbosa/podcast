export interface Podcast {
  title: string
  author: string
  cover: string
  summary: string
  id: string
}

export interface PodcastApi {
  title: { label: string }
  "im:artist": { label: string }
  "im:image": ["", "", { label: string }]
  summary: { label: string }
  id: { attributes: { "im:id": string } }
}
