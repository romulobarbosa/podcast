import Filter from "../../ui/components/Filter"

import PodcastCard from "./components/PodcastCard"
import "./styles.css"

const HomePage = () => {
  return (
    <div id="page-home" className="home">
      <div className="home__filter">
        <Filter totalItems={13} />
      </div>
      <div className="podcasts">
        <ul className="podcasts__list">
          <li className="podcasts__list-item">
            {<PodcastCard title="Galo Forte" author="HULK Paraíba" />}
          </li>
          <li className="podcasts__list-item">
            {
              <PodcastCard
                title="Galo Forte"
                author="HULK Paraíba"
                cover="https://www.esmaelmorais.com.br/wp-content/uploads/2023/03/hulk-atletico-mg.jpg"
              />
            }
          </li>
          <li className="podcasts__list-item">
            {
              <PodcastCard
                title="Galo Forte"
                author="HULK Paraíba"
                cover="https://www.esmaelmorais.com.br/wp-content/uploads/2023/03/hulk-atletico-mg.jpg"
              />
            }
          </li>
          <li className="podcasts__list-item">
            {
              <PodcastCard
                title="Galo Forte"
                author="HULK Paraíba"
                cover="https://www.esmaelmorais.com.br/wp-content/uploads/2023/03/hulk-atletico-mg.jpg"
              />
            }
          </li>
          <li className="podcasts__list-item">
            {
              <PodcastCard
                title="Galo Forte"
                author="São Victor do horto"
                cover="http://blog.chicomaia.com.br/wordpress/wp-content/uploads/2017/05/VICTOR.jpg"
              />
            }
          </li>
          <li className="podcasts__list-item">
            {<PodcastCard title="Galo Forte" author="HULK Paraíba" />}
          </li>
          <li className="podcasts__list-item">
            {<PodcastCard title="Galo Forte" author="HULK Paraíba" />}
          </li>
          <li className="podcasts__list-item">
            {
              <PodcastCard
                title="Galo Forte e Vingador!"
                author="HULK Paraíba"
                cover="https://www.esmaelmorais.com.br/wp-content/uploads/2023/03/hulk-atletico-mg.jpg"
              />
            }
          </li>
          <li className="podcasts__list-item">
            {<PodcastCard title="Galo Forte" />}
          </li>
          <li className="podcasts__list-item">
            {<PodcastCard title="Galo Forte" author="HULK Paraíba" />}
          </li>
          <li className="podcasts__list-item">
            {
              <PodcastCard
                title="Galo Forte"
                cover="https://www.esmaelmorais.com.br/wp-content/uploads/2023/03/hulk-atletico-mg.jpg"
              />
            }
          </li>
          <li className="podcasts__list-item">
            {
              <PodcastCard
                title="Galo Forte"
                author="HULK Paraíba"
                cover="https://www.esmaelmorais.com.br/wp-content/uploads/2023/03/hulk-atletico-mg.jpg"
              />
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
