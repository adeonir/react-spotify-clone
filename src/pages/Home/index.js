import React from 'react'

import {
  Container, Title, List, Playlist,
} from './styles'

function Home() {
  return (
    <Container>
      <Title>Home</Title>
      <List>
        <Playlist href="">
          <img
            src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/6a/CAPA_CD_WASTING_LIGHT.jpg/220px-CAPA_CD_WASTING_LIGHT.jpg"
            alt=""
          />
          <strong>Nome da playlist</strong>
          <p>Descrição</p>
        </Playlist>
      </List>
    </Container>
  )
}

export default Home
