import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: 5rem;
  background-color: #252525;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  align-items: center;
  opacity: 0.9;
`

export const NameText = styled.h1`
  color: white;
`

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
`

export const Ul = styled.ul`
  display: grid;
  grid-auto-flow: column;
  list-style: none;
  grid-gap: 50px;
`

export const Li = styled.li`
  color: white;
  font-size: 20px;
`
