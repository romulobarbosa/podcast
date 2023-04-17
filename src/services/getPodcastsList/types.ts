export interface Podcast {
  title: string
  author: string
  cover: string
}

export interface PodcastApi {
  title: { label: string }
  "im:artist": { label: string }
  "im:image": ["", "", { label: string }]
}
