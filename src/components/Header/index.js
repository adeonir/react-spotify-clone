import React from 'react'
import { Container, Search, User } from './styles'

function Header() {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Search" />
      </Search>

      <User>
        <img src="https://avatars3.githubusercontent.com/u/3428733?v=4" alt="Adeonir Kohl" />
        Adeonir Kohl
      </User>
    </Container>
  )
}

export default Header
