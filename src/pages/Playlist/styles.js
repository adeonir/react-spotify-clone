import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 35px;
`

export const Header = styled.header`
  display: flex;
  /* align-items: center; */

  img {
    width: 220px;
    height: 220px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }

  div {
    margin-left: 25px;
    margin-top: 25px;

    span {
      font-size: 11px;
      letter-spacing: 1.2px;
      font-weight: 300;
      text-transform: uppercase;
    }

    h1 {
      font-size: 32px;
    }

    p {
      margin-top: 10px;
      color: #b3b3b3;
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    button {
      background: #1db854;
      border-radius: 16px;
      border: 0;
      color: #ffffff;
      font-size: 11px;
      font-weight: 300;
      height: 32px;
      letter-spacing: 1.5px;
      line-height: 32px;
      padding: 0 35px;
      text-transform: uppercase;
      margin-top: 20px;
    }
  }
`
