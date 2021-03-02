import { useState } from 'react'
import * as S from './styles'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Tilt>
        <div>
          <Link href="/">
            <S.NameText>Max Assis</S.NameText>
          </Link>
        </div>
      </Tilt>
      <S.ContainerLinks>
        <S.Ul>
          <Tilt>
            <Link href="/trabalhos">
              <S.Li>Portfolio</S.Li>
            </Link>
          </Tilt>
          <Tilt>
            <Link href="/sobre">
              <S.Li>Sobre</S.Li>
            </Link>
          </Tilt>
          <Tilt>
            <Link href="/contato">
              <S.Li>Contato</S.Li>
            </Link>
          </Tilt>
        </S.Ul>
        <div onClick={() => setIsOpen(true)}>
          <S.MenuIcon />
        </div>
      </S.ContainerLinks>
      <S.MenuFull isOpen={isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} />
        <S.ContainerMenus>
          <Link href="/trabalhos">
            <S.Span>Trabalhos</S.Span>
          </Link>
          <Link href="/sobre">
            <S.Span>Sobre</S.Span>
          </Link>
          <Link href="/contato">
            <S.Span>Contato</S.Span>
          </Link>
        </S.ContainerMenus>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Header
