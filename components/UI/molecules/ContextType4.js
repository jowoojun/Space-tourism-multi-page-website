import styled from 'styled-components'

import { Heading_3, Heading_4, BodyFont, NavFont } from '../atoms/Context'
import { ContextTypeContainer, ContextTypeInnerContainer} from '../atoms/ContextTypeContainer'

const ContextType4Container = styled(ContextTypeContainer)`
  padding: 2rem 1.5rem;
  
  @media screen and (min-width: 767px) {
    padding: 0 155px 97px;
  }
  @media screen and (min-width: 1430px) {
    display: flex;
    align-items: center;
    padding: 0;
    height: auto;
  }
`

const ContextHeaderText = styled(NavFont)`
  text-transform: uppercase;
  color: #D0D6F9;
`

const Blank1 = styled.div`
  height: 8px;
  @media screen and (min-width: 1430px) {
    height: 15px;
  }
`

const ContextBodyFont = styled(BodyFont)`
  @media screen and (min-width: 1430px) {
    width: 444px;
  }
`

const Blank2 = styled.div`
  height: 16px;
  @media screen and (min-width: 1430px) {
    height: 27px;
  }
`

const ContextType4 = ({contextHeader, name, context}) => {
  return (
    <ContextType4Container>
      <ContextTypeInnerContainer>
        <ContextHeaderText>{contextHeader}</ContextHeaderText>
        <Blank1 />
        <Heading_3>{name.toUpperCase()}</Heading_3>
        <Blank2 />
        <ContextBodyFont>{context}</ContextBodyFont>
      </ContextTypeInnerContainer>
    </ContextType4Container>
  )
}

export default ContextType4;