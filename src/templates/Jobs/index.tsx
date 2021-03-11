import Header from 'components/Header'
import * as S from './styles'
import { motion } from 'framer-motion'
import { useProxy } from 'valtio'
import { state } from '../../utils/store'
import Portfolio from 'components/Portfolio'

function Jobs() {
  const snapshot = useProxy(state)

  return (
    <>
      <Header />
      <S.MainContainer hide={snapshot.toggle}>
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
        <S.WrapperPortfolio>
          <Portfolio />
        </S.WrapperPortfolio>
      </S.MainContainer>
    </>
  )
}

export default Jobs
