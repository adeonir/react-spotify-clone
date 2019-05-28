import React from 'react'

import GlobalStyled from './styles/global'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Player from './components/Player'

import { Wrapper, Container, Content } from './styles/components'

function App() {
  return (
    <>
      <GlobalStyled />

      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
          </Content>
        </Container>

        <Player />
      </Wrapper>
    </>
  )
}

export default App
