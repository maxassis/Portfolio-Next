import styled from 'styled-components'
import media from 'styled-media-query'
import { motion } from 'framer-motion'


export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
`
export const WrapperJob = styled(motion.div)`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  height: 25rem;
  align-items: center;
  justify-content: center;
  gap: 25px;
 // margin-top: 25px;

  ${media.lessThan('medium')`
  grid-template-columns: auto;
  grid-template-rows: repeat(2, auto);
  height: 42%;
  `}

  ${media.lessThan('small')`
  height: 44rem;
  gap: 13px;
  `}
`

export const Title = styled(motion.h1)`
  font-size: 3.3rem;
  margin: 70px 0px;
  color: #243665;
  opacity: 0.9;
`

export const Image = styled.img`
  width: 430px;
  height: 233px;


  ${media.lessThan('medium')`
  width: 100%;
  `}
`
export const WrapperDescription = styled.div`
  width: 100%;
  height: 22rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const JobTitle = styled.h1`
  color: #243665;
  opacity: 0.9;
  font-size: 2.1rem;
`

export const Description = styled.span`
  font-size: 16px;
  color: #243665;
  opacity: 0.9;
  text-align: justify;
`

export const WrapperButtons = styled.div`
  display: flex;
  gap: 13px;

  ${media.lessThan('small')`
  display: flex;
  justify-content: center;

  `}

`

export const Button = styled.button`
  background-color: #243665;
  border: none;
  color: white;
  display: flex;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  opacity: 0.9;
`


