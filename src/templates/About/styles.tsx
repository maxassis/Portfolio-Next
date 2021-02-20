import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eaf2e3;
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
  `};
`
export const GitIcon = styled(Github)`
  width: 35px;
  color: #252525;
  opacity: 0.9;
  cursor: pointer;
`

export const LinkedinIcon = styled(Linkedin)`
  width: 35px;
  color: #252525;
  opacity: 0.9;
  cursor: pointer;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 35px;
  color: #252525;
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
  color: #29312e;
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
  color: #29312e;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  font-size: 1.6rem;
  line-height: 1.8rem;
`
