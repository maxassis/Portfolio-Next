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
          <S.Avatar
            src="/img/max.jpg"
            alt="My Image"
            width={210}
            height={210}
          />
          <S.ContainerSkills>
            <S.Cargo
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Desenvolvedor Web Front End
            </S.Cargo>
            <S.Skills
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.8 }}
            >
              Html | Css | Javascript | Typescript | Node | React | Next | Vue |
              Nuxt
              <S.Description
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3.3 }}
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
