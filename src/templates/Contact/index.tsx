import * as S from './styles'
import Header from 'components/Header'
import { motion } from 'framer-motion'
import { ContactForm } from 'components/ContactForm'

function Contact() {
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
          <S.WrapperContact>
            <S.WrapperSocials>
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
            <S.WrapperForm>
              <ContactForm />
            </S.WrapperForm>
          </S.WrapperContact>
        </S.Wrapper>
      </S.MainContainer>
    </>
  )
}

export default Contact
