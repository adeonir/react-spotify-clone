import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: #282828;
  display: flex;
  height: 88px;
  justify-content: space-between;
  padding: 16px;
`

export const Current = styled.div`
  align-items: center;
  display: flex;

  img {
    border: 1px solid #ffffff;
    height: 56px;
    width: 56px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    span {
      color: #ffffff;
      font-size: 13px;
    }

    small {
      color: #b3b3b3;
      font-size: 11px;
      margin-top: 5px;
    }
  }
`

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
    cursor: pointer;
  }
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`

export const ProgressSlider = styled.div`
  width: 400px;
  margin: 0 15px;
`

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 12px;

  img {
    margin-right: 10px;
  }
`
