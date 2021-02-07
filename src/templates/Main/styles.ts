import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
`
export const WrapperIcons = styled.div`
  display: grid;
  grid-gap: 20px;
  display: grid;
  grid-auto-rows: min-content;
  justify-content: center;
  align-content: center;
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

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5.5rem;
  padding-left: 120px;
`

export const ContainerSkills = styled.div``

export const Cargo = styled(motion.h1)`
  font-size: 3.3rem;
  margin-bottom: 0.5rem;
  color: #252525;
  opacity: 0.9;
`

export const Skills = styled(motion.span)`
  font-size: 1.9rem;
  color: #252525;
  opacity: 0.9;
`
export const Description = styled(motion.p)`
  margin-top: 1.5rem;
  background-color: #ffa69e;
  padding: 7px;
  border-radius: 10px;
  color: #252525;
  opacity: 0.9;
  right: 5px;
  position: relative;
`
