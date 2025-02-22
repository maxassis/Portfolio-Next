import styled, { css } from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import media from 'styled-media-query'

type MainContainerProps = {
  hide: boolean
}

export const MainContainer = styled.div<MainContainerProps>`
  ${({ hide }) => css`
    width: 100%;
    height: auto;
    display: ${hide ? 'none' : 'grid'};
    grid-template-columns: 6.5rem 1fr;
    grid-template-rows: auto;

    ${media.lessThan('large')`
    grid-template-columns: 1fr;
  `};
  `}
`

export const WrapperIcons = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: min-content;
  justify-content: center;
  align-content: center;

  ${media.lessThan('large')`
    order: 1;
    grid-auto-flow: column;
    margin-bottom: 20px;  
  `};

  ${media.between('medium', 'large')`
  margin-top: 60px;
  `}
`

export const GitIcon = styled(Github)`
  width: 35px;
  color: #243665;
  opacity: 0.9;
  cursor: pointer;
`

export const LinkedinIcon = styled(Linkedin)`
  width: 35px;
  color: #243665;
  opacity: 0.9;
  cursor: pointer;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 35px;
  color: #243665;
  opacity: 0.9;
  cursor: pointer;
`

export const WrapperPortfolio = styled.div`
  width: 70%;
  margin: 0 auto;

  ${media.lessThan('large')`
    width: 90%;
    
  `}
`
