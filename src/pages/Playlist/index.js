import React from 'react'
import { Container, Header, Songlist } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

function Playlist() {
  return (
    <Container>
      <Header>
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/6a/CAPA_CD_WASTING_LIGHT.jpg/220px-CAPA_CD_WASTING_LIGHT.jpg"
          alt=""
        />

        <div>
          <span>Playlist</span>
          <h1>Melodic Metal Movement</h1>
          <p>Melodic metal, power metal, symphonic metal and everything melodic!</p>
          <p>108 songs</p>
          <button type="button">Play</button>
        </div>
      </Header>

      <Songlist cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>
            <img src={ClockIcon} alt="Duration" />
          </th>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Adicionar" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
        </tbody>
      </Songlist>
    </Container>
  )
}

export default Playlist
