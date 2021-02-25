import Tilt from 'react-parallax-tilt'
import { Github } from '@styled-icons/bootstrap/Github'
import * as S from './styles'

function Portfolio() {
  return (
    <>
      <S.Title>Trabalhos</S.Title>
      <S.WrapperJob>
        <Tilt>
          <S.Image src="/img/spotenu.png" alt="Job Image" />
        </Tilt>
        <S.WrapperDescription>
          <S.JobTitle>Spotenu</S.JobTitle>
          <S.Description>
            <strong> Descrição: </strong> LandPage de um serviço ficticio de
            streaming de audio, criado com ReactJs, utilizando Styled Components
            e React Hook Forms
          </S.Description>
          <S.WrapperButtons>
            <S.Button>Web App</S.Button>
            <S.Button>
              <Github style={{ height: '28px' }} />
              Codigo Fonte
            </S.Button>
          </S.WrapperButtons>
        </S.WrapperDescription>
      </S.WrapperJob>
      <S.WrapperJob>
        <Tilt>
          <S.Image src="/img/spotenu.png" alt="Job Image" />
        </Tilt>
        <S.WrapperDescription>
          <S.JobTitle>Spotenu</S.JobTitle>
          <S.Description>
            <strong> Descrição: </strong> LandPage de um serviço ficticio de
            streaming de audio, criado com ReactJs, utilizando Styled Components
            e React Hook Forms
          </S.Description>
          <S.WrapperButtons>
            <S.Button>Web App</S.Button>
            <S.Button>
              <Github style={{ height: '28px' }} />
              Codigo Fonte
            </S.Button>
          </S.WrapperButtons>
        </S.WrapperDescription>
      </S.WrapperJob>
    </>
  )
}

export default Portfolio
