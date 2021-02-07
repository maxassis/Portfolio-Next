import Header from 'components/Header'
import * as S from './styles'

const Main = () => (
  <>
    <S.MainContainer>
      <Header />
      <S.Wrapper>
        <S.WrapperIcons>
          <S.GitIcon />
          <S.LinkedinIcon />
          <S.WhatsappIcon />
        </S.WrapperIcons>
        <S.DataWrapper>
          <S.Avatar
            src="/img/max.jpg"
            alt="My Image"
            width={210}
            height={210}
          />
          <S.ContainerSkills>
            <S.Name>Max Assis</S.Name>
            <S.Cargo>Desenvolvedor Web Front End</S.Cargo>
            <S.Skills>
              Html | Css | Javascript | Typescript | Node | React | Next | Vue |
              Nuxt
            </S.Skills>
          </S.ContainerSkills>
        </S.DataWrapper>
      </S.Wrapper>
    </S.MainContainer>
  </>
)

export default Main
