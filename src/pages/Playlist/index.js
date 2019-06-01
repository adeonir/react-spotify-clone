import React from 'react'
import { Container, Header } from './styles'

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
    </Container>
  )
}

export default Playlist
