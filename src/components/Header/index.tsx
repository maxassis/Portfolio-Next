import * as S from './styles'
import Link from 'next/link'

const Header = () => (
  <S.Wrapper>
    <div>
      <Link href="/">
        <S.NameText>Max Assis</S.NameText>
      </Link>
    </div>
    <S.ContainerLinks>
      <S.Ul>
        <Link href="/trabalhos">
          <S.Li>Portfolio</S.Li>
        </Link>
        <Link href="/sobre">
          <S.Li>Sobre</S.Li>
        </Link>
        <Link href="/contato">
          <S.Li>Contato</S.Li>
        </Link>
      </S.Ul>
    </S.ContainerLinks>
  </S.Wrapper>
)

export default Header
