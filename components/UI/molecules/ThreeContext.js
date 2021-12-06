import styled from 'styled-components'

import { Heading_1, Heading_5, BodyFont } from '../atoms/Context'

const LimitedContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
`

const ThreeContext = ({gap1, gap2, context}) => {
  return (
    <LimitedContainer>
      <FlexContainer>
        <Heading_5 gap={gap1}>{context.h5}</Heading_5>
        <Heading_1 gap={gap2}>{context.h1}</Heading_1>
        <BodyFont>{context.body}</BodyFont>
      </FlexContainer>
    </LimitedContainer>
  )
}

export default ThreeContext;