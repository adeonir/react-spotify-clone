import styled from 'styled-components'

export const Container = styled.aside`
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 200px;

  > div {
    padding: 25px;
  }
`

export const Menu = styled.div`
  margin-bottom: 25px;

  > img {
    margin-bottom: 25px;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 10px;

    a {
      align-items: center;
      color: inherit;
      display: flex;
      font-size: 13px;
      font-weight: bold;
      line-height: 32px;
      position: relative;
      text-decoration: none;

      &:hover {
        color: #ffffff;
      }

      &.active {
        color: #ffffff;

        &:before {
          background: #1fd863;
          content: '';
          display: block;
          height: 26px;
          left: -25px;
          position: absolute;
          top: 3px;
          width: 4px;
        }
      }

      img {
        margin-right: 20px;
      }
    }
  }
`

export const Nav = styled.ul`
  list-style: none;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  span {
    font-size: 11px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  li {
    a {
      align-items: center;
      color: inherit;
      display: flex;
      font-size: 13px;
      font-weight: bold;
      line-height: 32px;
      text-decoration: none;

      &:hover {
        color: #ffffff;
      }

      img {
        margin-right: 20px;
      }
    }
  }
`

export const NewPlaylist = styled.button`
  align-items: center;
  background: transparent;
  border-top: 1px solid #282828;
  border: 0;
  color: #b3b3b3;
  display: flex;
  font-size: 13px;
  padding: 15px 25px;

  &:hover {
    color: #ffffff;

    svg {
      fill: #ffffff;
    }
  }

  img {
    margin-right: 10px;
  }
`
