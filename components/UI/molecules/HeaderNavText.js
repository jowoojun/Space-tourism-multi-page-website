import styled from 'styled-components'

import { FlexCenterBox } from "../atoms/FlexBox"
import { Heading_5NumberFont, Heading_5 } from "../atoms/Context"

const HeaderNavTextContainer = styled(FlexCenterBox)`
  flex-direction: row;
  margin-bottom: 2rem;
  @media screen and (min-width: 767px) {
    justify-content: flex-start;
    margin: 40px 0 60px 38.5px;
  }
  @media screen and (min-width: 1023px) {
    justify-content: flex-start;
    margin: 76px 0 64px 166.5px;
  }
`

const Blank = styled.div`
  width: 18px;
  @media screen and (min-width: 767px) {
    width: 19px;
  }
  @media screen and (min-width: 1023px) {
    width: 28px;
  }
`

const HeaderNavText = () => {
  return (  
    <HeaderNavTextContainer>
      <Heading_5NumberFont>01</Heading_5NumberFont>
      <Blank />
      <Heading_5>PICK YOUR DESTINATION</Heading_5>
    </HeaderNavTextContainer>
  )
}

export default HeaderNavText;