import * as S from './styles'
import Link from 'next/link'

const Error = () => {
    return (
        <S.MainContainer>
        <S.H1>404</S.H1>
        <S.Span>Opss... Esta pagina não existe</S.Span>
        <Link href="/">
        <S.Button>Voltar</S.Button>
        </Link>
        </S.MainContainer>
    );
}

export default Error;
