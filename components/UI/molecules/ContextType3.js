import styled from 'styled-components'

import { Heading_3, Heading_4, BodyFont } from '../atoms/Context'
import { ContextTypeContainer, ContextTypeInnerContainer} from '../atoms/ContextTypeContainer'

const ContextType3Container = styled(ContextTypeContainer)`
  padding: 2rem 1.5rem;
  
  @media screen and (min-width: 767px) {
    padding: 0 124px;
    height: 152px;
  }
  @media screen and (min-width: 1023px) {
    padding: 37px 0 54px;
    height: auto;
  }
`

const ContextHeaderText = styled(Heading_4)`
  text-transform: uppercase;
  opacity: 0.5;
`

const Blank1 = styled.div`
  height: 8px;
  @media screen and (min-width: 1023px) {
    height: 15px;
  }
`

const ContextBodyFont = styled(BodyFont)`
  @media screen and (min-width: 1023px) {
    width: 444px;
  }
`

const Blank2 = styled.div`
  height: 16px;
  @media screen and (min-width: 1023px) {
    height: 27px;
  }
`

const ContextType3 = ({contextHeader, name, context}) => {
  return (
    <ContextType3Container>
      <ContextTypeInnerContainer>
        <ContextHeaderText>{contextHeader}</ContextHeaderText>
        <Blank1 />
        <Heading_3>{name?.toUpperCase()}</Heading_3>
        <Blank2 />
        <ContextBodyFont>{context}</ContextBodyFont>
      </ContextTypeInnerContainer>
    </ContextType3Container>
  )
}

export default ContextType3;