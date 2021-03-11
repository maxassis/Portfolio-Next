import styled from 'styled-components'
import media from 'styled-media-query'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const H1 = styled.h1`
  font-size: 13rem;
  color: #243665;

  ${media.lessThan('medium')`
    font-size: 9rem;
    
  `};


`

export const Span = styled.span`
  font-size: 2.5rem;
  color: #243665;

  ${media.lessThan('medium')`
    font-size: 1.8rem;
    
  `};


`

export const Button = styled.button`
  background-color: #243665;
  border: none;
  color: white;
  display: flex;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  align-items: center;
  cursor: pointer;
  opacity: 0.9;
  height: 3.6rem;
  width: 15rem;
  margin-top: 2.5rem;
  justify-content: center;
  font-weight: 700;

  ${media.lessThan('small')`
    width: 70%;
    
  `};


`
