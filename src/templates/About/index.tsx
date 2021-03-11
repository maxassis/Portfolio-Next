import Header from 'components/Header'
import * as S from './styles'
import { motion } from 'framer-motion'
import { useProxy } from 'valtio'
import { state } from '../../utils/store'

function About() {
  const snapshot = useProxy(state)

  return (
    <>
      <Header />
      <S.MainContainer hide={snapshot.toggle}>
        <S.Wrapper>
        <S.WrapperIcons>
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.3 }}
          >
            <a href="https://www.github.com/maxassis" target="_blank">
              <S.GitIcon />
            </a>
          </motion.div>
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.3 }}
          >
            <a href="https://www.linkedin.com/in/max-assis/" target="blank">
              <S.LinkedinIcon />
            </a>
          </motion.div>
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 140 }}
            whileHover={{ scale: 1.3 }}
          >
            <a href="https://api.whatsapp.com/send?phone=5522933000215" target="blank">
            <S.WhatsappIcon />
            </a>
          </motion.div>
        </S.WrapperIcons>
          <S.DataWrapper>
            <S.Avatar src="/img/max.jpg" alt="My Image" />
            <S.ContainerAbout>
              <S.Sobre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Sobre
              </S.Sobre>
              <S.ContainerDescription>
                <S.Description
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
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
