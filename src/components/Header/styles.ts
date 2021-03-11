import styled, { css } from 'styled-components'
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
  z-index: 1;

  ${media.lessThan('medium')`
    padding: 0 30px;   
  `}

  ${media.lessThan('small')`
    padding: 0 20px;
    opacity: 1;
  `}
`

export const NameText = styled.h1`
  color: #f2f5fa;
  cursor: pointer;
  font-size: 27px;
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
  color: #f2f5fa;
  font-size: 20px;
  cursor: pointer;

  :hover {
    color: #ccf2f4;
  }

  ${media.lessThan('medium')`
    font-size: 15px;
  `}

  ${media.lessThan('small')`
    color: green;
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f2f5fa;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    pointer-events: none;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      margin: 20px;
      cursor: pointer;
      width: 3rem;
      height: 3rem;
    }
  `}
`

export const MenuIcon = styled(Menu)`
  display: none;
  width: 40px;
  color: #f2f5fa;

  ${media.lessThan('small')`
    display: inline-block;
  `}
`

export const ContainerMenus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  gap: 40px;
`

export const Span = styled.span`
  font-size: 30px;
  color: #243665;
  transition: ease;

  &:hover {
    font-size: 35px;
    color: #f72585;
  }
`
