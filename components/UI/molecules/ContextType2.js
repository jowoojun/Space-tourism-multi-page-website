import styled from 'styled-components'

import { Heading_2, BodyFont } from '../atoms/Context'
import { ContextTypeContainer, ContextTypeInnerContainer} from '../atoms/ContextTypeContainer'

const ContextType2Container = styled(ContextTypeContainer)`
  padding: 1.25rem 1.5rem 2rem;
  
  @media screen and (min-width: 767px) {
    padding: 2rem 98px 49px;
  }
  @media screen and (min-width: 1430px) {
    padding: 37px 0 54px;
  }
`

const Blank = styled.div`
  height: 1px;
  @media screen and (min-width: 767px) {
    height: 8px;
  }
  @media screen and (min-width: 1430px) {
    height: 14px;
  }
`

const ContextType2 = ({name, context}) => {
  return (
    <ContextType2Container>
      <ContextTypeInnerContainer>
        <Heading_2>{name?.toUpperCase()}</Heading_2>
        <Blank />
        <BodyFont>{context}</BodyFont>
      </ContextTypeInnerContainer>
    </ContextType2Container>
  )
}

export default ContextType2;