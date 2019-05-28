import React from 'react'

import {
  Container, NewPlaylist, Menu, Nav,
} from './styles'

import AddPlaylistIcon from '../../assets/images/add_playlist.svg'
import MenuIcon from '../../assets/images/menu_dots.svg'
import HomeIcon from '../../assets/images/home.svg'
import BrowseIcon from '../../assets/images/browse.svg'
import RadioIcon from '../../assets/images/radio.svg'

function Sidebar() {
  return (
    <Container>
      <div>
        <Menu>
          <img src={MenuIcon} alt="Adicionar playlist" />
          <ul>
            <li>
              <a href="foo" className="active">
                <img src={HomeIcon} alt="Adicionar playlist" />
                Home
              </a>
            </li>
            <li>
              <a href="foo">
                <img src={BrowseIcon} alt="Adicionar playlist" />
                Browse
              </a>
            </li>
            <li>
              <a href="foo">
                <img src={RadioIcon} alt="Adicionar playlist" />
                Radio
              </a>
            </li>
          </ul>
        </Menu>

        <Nav>
          <li>
            <span>Your Library</span>
          </li>

          <li>
            <a href="foo">Made For You</a>
          </li>
          <li>
            <a href="foo">Recently Played</a>
          </li>
          <li>
            <a href="foo">Songs</a>
          </li>
          <li>
            <a href="foo">Albums</a>
          </li>
          <li>
            <a href="foo">Artists</a>
          </li>
          <li>
            <a href="foo">Stations</a>
          </li>
          <li>
            <a href="foo">Videos</a>
          </li>
          <li>
            <a href="foo">Podcasts</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>Playlists</span>
          </li>

          <li>
            <a href="foo">Rock</a>
          </li>
          <li>
            <a href="foo">Soft Rock</a>
          </li>
          <li>
            <a href="foo">Solitary Ride</a>
          </li>
        </Nav>
      </div>
      <NewPlaylist>
        <img src={AddPlaylistIcon} alt="Adicionar playlist" />
        New Playlist
      </NewPlaylist>
    </Container>
  )
}

export default Sidebar
