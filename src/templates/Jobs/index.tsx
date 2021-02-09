import Header from 'components/Header'
import * as S from './styles'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github } from '@styled-icons/bootstrap/Github'

function Jobs() {
  return (
    <>
      <S.MainContainer>
        <Header />
        <S.Wrapper>
          <S.WrapperIcons>
            <motion.div
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.3 }}
            >
              <S.GitIcon />
            </motion.div>
            <motion.div
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.3 }}
            >
              <S.LinkedinIcon />
            </motion.div>
            <motion.div
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 140 }}
              whileHover={{ scale: 1.3 }}
            >
              <S.WhatsappIcon />
            </motion.div>
          </S.WrapperIcons>
          <S.DataWrapper>
            <S.ContainerJobs>
              <S.WrapperTitle>
                <S.Title>Trabalhos</S.Title>
              </S.WrapperTitle>
              <S.WrapperJob>
                <S.Image src="/img/spotenu.png" alt="Job Image"></S.Image>
                <S.WrapperDescription>
                  <S.JobTitle>Spotenu</S.JobTitle>
                  <S.Description>
                    <strong> Descrição: </strong> LandPage de um serviço
                    ficticio de streaming de audio, criado com ReactJs,
                    utilizando Styled Components e React Hook Forms
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
            </S.ContainerJobs>
          </S.DataWrapper>
        </S.Wrapper>
      </S.MainContainer>
    </>
  )
}

export default Jobs
