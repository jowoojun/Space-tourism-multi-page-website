import styled from 'styled-components'

import { Heading_1, Heading_5, BodyFont } from '../atoms/Context'

const LimitedContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (min-width: 1023px) {
    align-items: flex-start;
    width: auto;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;

  @media screen and (min-width: 1023px) {
    align-items: flex-start;
  }
`

const Blank = styled.div`
  height: 1rem;
  @media screen and (min-width: 767px) {
    height: 1.5rem;
  }
`

const ThreeContext = ({context}) => {
  return (
    <LimitedContainer>
      <FlexContainer>
        <Heading_5>{context.h5}</Heading_5>
        <Blank />
        <Heading_1>{context.h1}</Heading_1>
        <Blank />
        <BodyFont>{context.body}</BodyFont>
      </FlexContainer>
    </LimitedContainer>
  )
}

export default ThreeContext;