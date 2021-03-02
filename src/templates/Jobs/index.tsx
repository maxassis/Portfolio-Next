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
        <S.WrapperPortfolio>
          <Portfolio />
        </S.WrapperPortfolio>
      </S.MainContainer>
    </>
  )
}

export default Jobs
