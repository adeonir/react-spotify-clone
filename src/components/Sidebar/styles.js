import styled from 'styled-components'

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      font-weight: bold;
      line-height: 32px;
      display: flex;
      align-items: center;
      position: relative;

      &:hover {
        color: #ffffff;
      }

      &.active {
        color: #ffffff;

        &:before {
          content: '';
          display: block;
          width: 4px;
          height: 26px;
          background: #1fd863;
          position: absolute;
          top: 3px;
          left: -25px;
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
  margin-bottom: 25px;

  span {
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      font-weight: bold;
      line-height: 32px;
      display: flex;
      align-items: center;

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
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
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
