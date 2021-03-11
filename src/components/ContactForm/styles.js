import styled from 'styled-components'
import media from 'styled-media-query'

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 7px;
  border: none;
  padding: 15px;
  background-color: #f2f5fa;
`
export const Textarea = styled.textarea`
  border-radius: 7px;
  border: none;
  height: 140px;
  font-family: 'Poppins', sans-serif;
  padding: 15px;
`

export const Button = styled.button`
  height: 40px;
  width: 15rem;
  border-radius: 7px;
  border: none;
  align-self: center;
  background-color: #243665;
  color: #f2f5fa;
  font-weight: 900;
  font-size: 15px;

  ${media.lessThan('medium')`
    width:100%;
  `}
`
