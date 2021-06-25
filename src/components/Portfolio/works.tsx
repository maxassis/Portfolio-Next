/* eslint-disable prettier/prettier */
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
          <S.Image src="/img/ensinio.png" alt="Job Image" />
        </Tilt>
        <S.WrapperDescription>
          <S.JobTitle>Ensinio</S.JobTitle>
          <S.Description>
            <strong> Descrição: </strong> Landing page da plataforma de cursos online Ensinio
          </S.Description>
          <S.WrapperButtons>
            <Link href="http://ensinio-max.surge.sh" >
            <S.Button>Web App</S.Button>
            </Link>
            <a href="https://github.com/maxassis/Ensinio" style={{textDecoration: 'none'}}>
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
          <S.Image src="/img/maxlink.png" alt="Job Image" />
        </Tilt>
        <S.WrapperDescription>
          <S.JobTitle>Max Link</S.JobTitle>
          <S.Description>
            <strong> Descrição: </strong> aplicativo mobile criado com React Native e Expo, o app utiliza a api do Bitly, para encurtar URLs digitadas pelo usuario.
          </S.Description>
          <S.WrapperButtons>
            <a href="https://github.com/maxassis/MaxLink" style={{textDecoration: 'none'}}>
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
            <strong> Descrição: </strong> Landing Page de um serviço ficticio de
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
            para Ps5, feito durante a semana FrontPush, utilizando Html, Javascript e Sass
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
            as informações metereologicas da API Hg Weather.
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
