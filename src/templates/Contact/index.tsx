import * as S from './styles'
import Header from 'components/Header'
import { motion } from 'framer-motion'
import { ContactForm } from 'components/ContactForm'
import { useProxy } from 'valtio'
import { state } from '../../utils/store'

function Contact() {
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
          <S.WrapperContact>
            <S.WrapperSocials
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <S.Contact>
                <S.Mail />
                max.assis@outlook.com
              </S.Contact>
              <S.Contact>
                <S.Link />
                Max Assis
              </S.Contact>
              <S.Contact>
                <S.Git />
                maxassis
              </S.Contact>
            </S.WrapperSocials>
            <S.WrapperForm
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <ContactForm />
            </S.WrapperForm>
          </S.WrapperContact>
        </S.Wrapper>
      </S.MainContainer>
    </>
  )
}

export default Contact
