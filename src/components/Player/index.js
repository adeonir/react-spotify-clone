import React from 'react'
import Slider from 'rc-slider'

import {
  Container, Current, Progress, Controls, Volume, Time, ProgressSlider,
} from './styles'

import VolumeIcon from '../../assets/images/volume.svg'
import ShuffleIcon from '../../assets/images/shuffle.svg'
import BackwardIcon from '../../assets/images/backward.svg'
import ForwardIcon from '../../assets/images/forward.svg'
import PlayIcon from '../../assets/images/play.svg'
// import PauseIcon from '../../assets/images/pause.svg'
import RepeatIcon from '../../assets/images/repeat.svg'

function Player() {
  return (
    <Container>
      <Current>
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/6a/CAPA_CD_WASTING_LIGHT.jpg/220px-CAPA_CD_WASTING_LIGHT.jpg"
          alt="Foo Fighters - Wasting Light"
        />
        <div>
          <span>Walk</span>
          <small>Foo Fighters</small>
        </div>
      </Current>

      <Progress>
        <Controls>
          <button type="button">
            <img src={ShuffleIcon} alt="Suffle" />
          </button>
          <button type="button">
            <img src={BackwardIcon} alt="Backward" />
          </button>
          <button type="button">
            <img src={PlayIcon} alt="Play" />
          </button>
          <button type="button">
            <img src={ForwardIcon} alt="Forward" />
          </button>
          <button type="button">
            <img src={RepeatIcon} alt="Repeat" />
          </button>
        </Controls>

        <Time>
          <span>1:39</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ed760' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>4:12</span>
        </Time>
      </Progress>

      <Volume>
        <img src={VolumeIcon} alt="Volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#b3b3b3' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  )
}

export default Player
