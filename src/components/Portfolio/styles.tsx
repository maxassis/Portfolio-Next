import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperJob = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  height: 25rem;
  align-items: center;
  justify-content: center;
  gap: 25px;

  ${media.lessThan('medium')`
  grid-template-columns: auto;
  `}
`

export const Image = styled.img`
  width: 460px;
  opacity: 0.9;

  ${media.lessThan('medium')`
  width: 100%;
  `}
`
export const WrapperDescription = styled.div`
  width: 100%;
  height: 22rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const JobTitle = styled.h1`
  color: #29312e;
  opacity: 0.9;
`

export const Description = styled.span`
  font-size: 14px;
  color: #29312e;
  opacity: 0.9;
`

export const WrapperButtons = styled.div`
  display: flex;
  gap: 13px;
`

export const Button = styled.button`
  background-color: #ffa69e;
  border: none;
  color: white;
  display: flex;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`
