import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import Image from 'next/image'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  width: 100%;
  height: calc(100vh - 5rem);
`
export const WrapperIcons = styled.div`
  background-color: pink;
  display: grid;
  grid-gap: 20px;
  display: grid;
  grid-auto-rows: min-content;
  justify-content: center;
  align-content: center;
`
export const GitIcon = styled(Github)`
  width: 40px;
`

export const LinkedinIcon = styled(Linkedin)`
  width: 40px;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 40px;
`

export const Avatar = styled(Image)`
  border-radius: 50%;
`

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5.5rem;
`

export const ContainerSkills = styled.div``

export const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.6rem;
`

export const Cargo = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
`

export const Skills = styled.span`
  font-size: 1.7rem;
`
