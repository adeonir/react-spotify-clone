import React from 'react'

import {
  Container, Title, List, Playlist,
} from './styles'

function Home() {
  return (
    <Container>
      <Title>Home</Title>
      <List>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/6a/CAPA_CD_WASTING_LIGHT.jpg/220px-CAPA_CD_WASTING_LIGHT.jpg"
            alt=""
          />
          <strong>Melodic Metal Movement</strong>
          <p>Melodic metal, power metal, symphonic metal and everything melodic!</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/6a/CAPA_CD_WASTING_LIGHT.jpg/220px-CAPA_CD_WASTING_LIGHT.jpg"
            alt=""
          />
          <strong>Melodic Metal Movement</strong>
          <p>Melodic metal, power metal, symphonic metal and everything melodic!</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/6a/CAPA_CD_WASTING_LIGHT.jpg/220px-CAPA_CD_WASTING_LIGHT.jpg"
            alt=""
          />
          <strong>Melodic Metal Movement</strong>
          <p>Melodic metal, power metal, symphonic metal and everything melodic!</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img
            src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/6a/CAPA_CD_WASTING_LIGHT.jpg/220px-CAPA_CD_WASTING_LIGHT.jpg"
            alt=""
          />
          <strong>Melodic Metal Movement</strong>
          <p>Melodic metal, power metal, symphonic metal and everything melodic!</p>
        </Playlist>
      </List>
    </Container>
  )
}

export default Home
