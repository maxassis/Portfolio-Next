import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap/Github'
import { Linkedin } from '@styled-icons/bootstrap/Linkedin'
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp'
import media from 'styled-media-query'

export const MainContainer = styled.div`
  width: 100%;
  height: 146vh;
  background-color: #eaf2e3;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  grid-template-rows: auto;
  width: 100%;
  height: auto;

  ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 0 30px;
    height: auto;
  `};
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
    margin-bottom: 80px;
  `}
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

export const WrapperPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${media.lessThan('medium')`
    display: grid;
  `}
`

export const ContainerJobs = styled.div`
  width: 80%;
  height: 100vh;

  ${media.lessThan('medium')`
    width: 100%;
  `}
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
  color: #29312e;
  opacity: 0.9;
`
