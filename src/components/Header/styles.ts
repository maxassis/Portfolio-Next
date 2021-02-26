import styled from 'styled-components'
import media from 'styled-media-query'
import { Menu } from '@styled-icons/boxicons-regular/Menu'

export const Wrapper = styled.main`
  width: 100%;
  height: 5rem;
  background-color: #243665;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  align-items: center;
  opacity: 0.9;

  ${media.lessThan('medium')`
    padding: 0 30px;
  `}

  ${media.lessThan('small')`
    padding: 0 20px;
  `}
`

export const NameText = styled.h1`
  color: #f2f5fa;
  cursor: pointer;
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

  ${media.lessThan('medium')`
    grid-gap: 25px;
  `}

  ${media.lessThan('small')`
    display: none;
  `}
`

export const Li = styled.li`
  color: white;
  font-size: 20px;
  cursor: pointer;

  :hover {
    color: #ffa69e;
  }

  ${media.lessThan('medium')`
    font-size: 15px;
  `}

  ${media.lessThan('small')`
    color: green;
  `}
`
