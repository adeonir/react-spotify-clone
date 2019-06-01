import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Playlist from '../pages/Playlist'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/playlists/:id" component={Playlist} />
    </Switch>
  )
}

export default Routes
