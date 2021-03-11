import * as S from './styles'
import Jobs from './works'

function Portfolio() {
  return (
    <>
      <S.Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Trabalhos
      </S.Title>
      <Jobs/>
    </>
  )
}

export default Portfolio
