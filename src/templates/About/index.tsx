import Header from 'components/Header'
import * as S from './styles'
import { motion } from 'framer-motion'

function About() {
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
            <S.Avatar src="/img/max.jpg" alt="My Image" />
            <S.ContainerAbout>
              <S.Sobre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                Sobre
              </S.Sobre>
              <S.ContainerDescription>
                <S.Description
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.8 }}
                >
                  Desenvolvedor Front End com 1 ano de experiencia, em
                  desenvolvimento web e mobile, em 2020 conclui o bootcamp
                  Labenu de desenvolvimento web fullstack, com mais 1000 horas
                  de código, muitas conquistas e aprendizados que levarei para a
                  vida.
                  <br />
                  <br />
                  Alem de desenvolvedor web front-end, tambem sou advogado Civel
                  e Trabalhista, onde atuo desde 2011.
                </S.Description>
              </S.ContainerDescription>
            </S.ContainerAbout>
          </S.DataWrapper>
        </S.Wrapper>
      </S.MainContainer>
    </>
  )
}

export default About
