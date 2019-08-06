import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 110px;
`

export const Title = styled.h1`
  font-size: 44px;
`

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`

export const Playlist = styled(Link)`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-decoration: none;
  width: calc(25% - 20px);

  img {
    width: 100%;
    height: auto;
  }

  strong {
    color: #ffffff;
    font-size: 14px;
    margin-top: 10px;
  }

  p {
    color: #b3b3b3;
    line-height: 1.8;
    font-size: 12px;
    margin-top: 10px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:hover img {
    opacity: 0.5;
  }
`
