import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyled from './styles/global'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Player from './components/Player'

import { Wrapper, Container, Content } from './styles/components'

import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />

      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>

        <Player />
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
