import React, { useState } from 'react'
import axios from 'axios'
import * as S from './styles.js'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notify = () =>
  toast('🦄 Formulario enviado com sucesso', {
    position: 'top-center',
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })

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
        notify()
        handleServerResponse(
          true
          // 'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <>
      <S.Formulario onSubmit={handleOnSubmit}>
        <S.Input
          id="name"
          type="text"
          name="_name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          placeholder="Nome"
        />
        <S.Input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="Email"
        />
        <S.Textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          placeholder="Mensagem"
        />
        <S.Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Envie'
              : 'Enviado'
            : 'Enviando...'}
        </S.Button>
      </S.Formulario>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  )
}

export default ContactForm
