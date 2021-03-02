import { useProxy } from 'valtio'
import * as S from './styles'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { state } from '../../utils/store'

function Header() {
  const snapshot = useProxy(state)

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
        <div onClick={() => (state.toggle = !state.toggle)}>
          <S.MenuIcon />
        </div>
      </S.ContainerLinks>
      <S.MenuFull isOpen={snapshot.toggle}>
        <CloseIcon onClick={() => (state.toggle = !state.toggle)} />
        <S.ContainerMenus>
          <Link href="/trabalhos">
            <S.Span onClick={() => (state.toggle = !state.toggle)}>
              Trabalhos
            </S.Span>
          </Link>
          <Link href="/sobre">
            <S.Span onClick={() => (state.toggle = !state.toggle)}>
              Sobre
            </S.Span>
          </Link>
          <Link href="/contato">
            <S.Span onClick={() => (state.toggle = !state.toggle)}>
              Contato
            </S.Span>
          </Link>
        </S.ContainerMenus>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Header
