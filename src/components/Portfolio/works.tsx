import * as S from './styles'
import Tilt from 'react-parallax-tilt'
import { Github } from '@styled-icons/bootstrap/Github'
import Link from 'next/link'

function Works() {
  return (
    <S.ContainerMain>
      <S.WrapperJob
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Tilt>
          <S.Image src="/img/telzir.jpg" alt="Job Image" />
        </Tilt>
        <S.WrapperDescription>
          <S.JobTitle>Telzir</S.JobTitle>
          <S.Description>
            <strong> Descrição: </strong> Web app que calcula o preço das ligações telefonicas
            conforme o plano e os minutos escolhidos pelo usuario, criado com ReactJs, utilizando Styled Components
            e React Hook Forms
          </S.Description>
          <S.WrapperButtons>
            <Link href="https://telzirapp.netlify.app/" >
            <S.Button>Web App</S.Button>
            </Link>
            <a href="https://github.com/maxassis/Telzir" style={{textDecoration: 'none'}}>
            <S.Button>
              <Github style={{ height: '28px' }} />
              Codigo Fonte
            </S.Button>
            </a>
          </S.WrapperButtons>
        </S.WrapperDescription>
      </S.WrapperJob>
      <S.WrapperJob
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
            <Link href="https://max-spotenu.netlify.app/" >
            <S.Button>Web App</S.Button>
            </Link>
            <a href="https://github.com/maxassis/spotenu" style={{textDecoration: 'none'}} >
            <S.Button>
              <Github style={{ height: '28px' }} />
              Codigo Fonte
            </S.Button>
            </a>
          </S.WrapperButtons>
        </S.WrapperDescription>
      </S.WrapperJob>
      <S.WrapperJob
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Tilt>
          <S.Image src="/img/spider.jpg" alt="Job Image" />
        </Tilt>
        <S.WrapperDescription>
          <S.JobTitle>Spider-Man Ps5</S.JobTitle>
          <S.Description>
            <strong> Descrição: </strong> LandPage do Game Spider-man Miles Morales 
            para Ps5, feito durante a semana FrontPush, utizilando Html, Javascript e Sass
          </S.Description>
          <S.WrapperButtons>
            <Link href="https://spiderman-landpage.netlify.app" >
            <S.Button>Web App</S.Button>
            </Link>
            <a href="https://github.com/maxassis/landpage-spiderman" style={{textDecoration: 'none'}} >
            <S.Button>
              <Github style={{ height: '28px' }} />
              Codigo Fonte
            </S.Button>
            </a>
          </S.WrapperButtons>
        </S.WrapperDescription>
      </S.WrapperJob>
      <S.WrapperJob
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Tilt>
          <S.Image src="/img/tempo.png" alt="Job Image" />
        </Tilt>
        <S.WrapperDescription>
          <S.JobTitle>App Mobile Previsão do Tempo</S.JobTitle>
          <S.Description>
            <strong> Descrição: </strong> App Mobile feito com React Native e Expo, consumindo
            as informaçoes metereologicas da API Hg Weather.
          </S.Description>
          <S.WrapperButtons>
            <a href="https://github.com/maxassis/previsao-do-tempo" style={{textDecoration: 'none'}} >
            <S.Button>
              <Github style={{ height: '28px' }} />
              Codigo Fonte
            </S.Button>
            </a>
          </S.WrapperButtons>
        </S.WrapperDescription>
      </S.WrapperJob>
      </S.ContainerMain>
  )
}

export default Works
