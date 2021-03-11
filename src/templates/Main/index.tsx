import Header from 'components/Header'
import * as S from './styles'
import { motion } from 'framer-motion'

const Main = () => (
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
          <S.ContainerSkills>
            <S.Cargo
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Desenvolvedor Web Front End
            </S.Cargo>
            <S.Skills
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.3 }}
            >
              Html | Css | Javascript | Typescript | Node | React | Next | Vue |
              Nuxt
              <S.Description
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.8 }}
              >
                Desenvolvimento de aplicaçoes web, com foco na performance e
                experiencia do usuario
              </S.Description>
            </S.Skills>
          </S.ContainerSkills>
        </S.DataWrapper>
      </S.Wrapper>
    </S.MainContainer>
  </>
)

export default Main
