import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { motion } from 'framer-motion'
import media from 'styled-media-query'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  width: 100%;
  height: calc(100vh - 5rem);

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 0 30px;
    height: 600px;
    padding-top: 80px;
  `};

  ${media.lessThan('medium')`
    padding-top: 120px;
  `};
`
export const WrapperIcons = styled.div`
  display: grid;
  grid-gap: 20px;
  display: grid;
  grid-auto-rows: min-content;
  justify-content: center;
  align-content: center;
  order: 0;
  z-index: -1;

  ${media.lessThan('large')`
  grid-auto-flow: column;
  order: 1;
  margin-top: 20px;
    
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
  gap: 4.5rem;
  padding-left: 120px;

  ${media.lessThan('large')`
    flex-direction: column;
    padding-left: 0px;
  `}

  ${media.lessThan('small')`
  gap: 3rem;
  `}
`

export const ContainerSkills = styled.div``

export const Cargo = styled(motion.h1)`
  font-size: 3.3rem;
  margin-bottom: 0.5rem;
  color: #243665;
  opacity: 0.9;

  ${media.lessThan('small')`
  font-size: 2.5rem;
  
  `}
`

export const Skills = styled(motion.span)`
  font-size: 1.8rem;
  color: #243665;
  opacity: 0.9;

  ${media.lessThan('small')`
  font-size: 1.5rem;
  `}
`
export const Description = styled(motion.p)`
  margin-top: 1.5rem;
  background-color: #243665;
  padding: 7px;
  border-radius: 10px;
  color: #f2f5fa;
  opacity: 0.9;
  right: 5px;
  position: relative;
`

export const MenuFull = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: red;
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
  z-index: 1;
`
