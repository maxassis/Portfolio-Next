import React, { useState } from 'react'
import axios from 'axios'
//import * as S from './styles'
import styled from 'styled-components'

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Input = styled.input`
  height: 40px;
  border-radius: 7px;
  border: none;
  padding: 15px;
`
const Textarea = styled.textarea`
  border-radius: 7px;
  border: none;
  height: 140px;
  font-family: 'Poppins', sans-serif;
  padding: 15px;
`

const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 7px;
  border: none;
  align-self: center;
  background-color: #ffa69e;
`

export function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xoqpbzwz',
      data: inputs
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <>
      <Formulario onSubmit={handleOnSubmit}>
        <Input
          id="name"
          type="text"
          name="_name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          placeholder="Nome"
        />
        <Input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="Email"
        />
        <Textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          placeholder="Mensagem"
        />
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Envie'
              : 'Enviando'
            : 'Enviando...'}
        </Button>
      </Formulario>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </>
  )
}
