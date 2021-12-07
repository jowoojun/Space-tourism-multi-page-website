import styled from 'styled-components'

import { Heading_2, BodyFont } from '../atoms/Context'

const LimitedContainer = styled.div`
  width: 100%;
  padding: 1.25rem 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (min-width: 767px) {
    padding: 2rem 98px 49px;
  }
  @media screen and (min-width: 1023px) {
    align-items: flex-start;
    width: auto;
    padding: 37px 0 54px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1023px) {
    align-items: flex-start;
  }
`

const Blank = styled.div`
  height: 1px;
  @media screen and (min-width: 767px) {
    height: 8px;
  }
  @media screen and (min-width: 1023px) {
    height: 14px;
  }
`

const ContextType2 = ({name, context}) => {
  return (
    <LimitedContainer>
      <FlexContainer>
        <Heading_2>{name?.toUpperCase()}</Heading_2>
        <Blank />
        <BodyFont>{context}</BodyFont>
      </FlexContainer>
    </LimitedContainer>
  )
}

export default ContextType2;