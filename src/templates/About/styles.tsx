import styled, { css } from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

type MainContainerProps = {
  hide: boolean
}

export const MainContainer = styled.div<MainContainerProps>`
  ${({ hide }) => css`
    width: 100%;
    height: auto;
    display: ${hide ? 'none' : 'flex'};
  `}
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  width: 100%;
  height: calc(100vh - 5rem);

  ${media.lessThan('large')`
  padding: 0 30px;
  gap: 50px;
  
  `};

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    margin-top: 120px;
  `};
`
export const WrapperIcons = styled.div`
  display: grid;
  grid-gap: 20px;
  display: grid;
  grid-auto-rows: min-content;
  justify-content: center;
  align-content: center;

  ${media.lessThan('medium')`
    order: 1;
    grid-auto-flow: column;
    //z-index: -1;
    margin-bottom: 20px;  
  `};
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

export const Avatar = styled.img`
  border-radius: 50%;
  width: 210px;

  ${media.lessThan('medium')`
    width: 170px;
  `}
`

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5.5rem;
  padding-left: 120px;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    padding-left: 0px;
   

  `};
`

export const ContainerAbout = styled.div``

export const Sobre = styled(motion.h1)`
  font-size: 3.3rem;
  margin-bottom: 1.2rem;
  color: #243665;
  opacity: 0.9;
`

export const ContainerDescription = styled.div`
  width: 60%;
  text-align: justify;

  ${media.lessThan('medium')`
  width: 100%;

    `};
`

export const Description = styled(motion.span)`
  opacity: 0.9;
  color: #243665;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-size: 1.6rem;
  line-height: 1.8rem;
`
