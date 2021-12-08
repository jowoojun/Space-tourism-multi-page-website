import styled from 'styled-components'

import { Heading_1, Heading_5, BodyFont } from '../atoms/Context'
import { ContextTypeContainer, ContextTypeInnerContainer} from '../atoms/ContextTypeContainer'

const ContextType1InnerContainer = styled(ContextTypeInnerContainer)`
  max-width: 450px;
`

const Blank = styled.div`
  height: 1rem;
  @media screen and (min-width: 767px) {
    height: 1.5rem;
  }
`

const ContextType1 = ({context}) => {
  return (
    <ContextTypeContainer>
      <ContextType1InnerContainer>
        <Heading_5>{context.h5}</Heading_5>
        <Blank />
        <Heading_1>{context.h1}</Heading_1>
        <Blank />
        <BodyFont>{context.body}</BodyFont>
      </ContextType1InnerContainer>
    </ContextTypeContainer>
  )
}

export default ContextType1;