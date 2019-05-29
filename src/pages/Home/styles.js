import styled from 'styled-components'

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

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  text-decoration: none;
  width: 250px;
  color: #ffffff;

  img {
    height: 250px;
  }

  strong {
    font-size: 16px;
    margin-top: 10px;
  }

  p {
    line-height: 22px;
    font-size: 13px;
    margin-top: 5px;
    color: #b3b3b3;
  }

  &:first-child {
    margin-left: 0;
  }
`
