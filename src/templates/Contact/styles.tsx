import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import { Email } from '@styled-icons/material/Email'

export const MainContainer = styled.div`
  width: 100%;
  height: auto;
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

export const Avatar = styled.img`
  border-radius: 50%;
`

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5.5rem;
  padding-left: 120px;
`
export const WrapperContact = styled.div`
  display: grid;
  grid-template-rows: 35% 1fr;
  width: 70%;
  margin: 0 auto;
  justify-content: center;
  grid-auto-columns: 600px;
`
export const WrapperSocials = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Git = styled(Github)`
  width: 25px;
`

export const Mail = styled(Email)`
  width: 25px;
`

export const Link = styled(Linkedin)`
  width: 25px;
`

export const Contact = styled.p`
  display: flex;
  gap: 16px;
  font-size: 20px;
`
export const WrapperForm = styled.div``
