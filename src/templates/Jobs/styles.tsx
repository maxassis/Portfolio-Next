import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { motion } from 'framer-motion'

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #eaf2e3;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  width: 100%;
  height: 100vh;
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

export const DataWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ContainerJobs = styled.div`
  width: 90%;
  height: 100vh;
`

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20rem;
  padding-left: 30px;
`

export const Title = styled.h1`
  font-size: 3.3rem;
`

export const WrapperJob = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  height: 30rem;
  // background-color: yellow;
`

export const Image = styled.img`
  width: 560px;
  align-self: center;
`
export const WrapperDescription = styled.div`
  width: 530px;
  height: 265px;
  background-color: pink;
  align-self: center;
`

export const JobTitle = styled.h1``
