import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 800px;
  min-width: 1024px;
`

export const Container = styled.div`
  display: flex;
  flex: 1;
`

export const Content = styled.div`
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 250px, 100%;
  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  display: flex;
  flex-direction: column;
  flex: 1;
`
