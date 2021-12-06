import styled from 'styled-components'

import { FlexCenterBox } from "../atoms/FlexBox"
import { NavContentNumberFont, NavFont } from "../atoms/Context"

const NavContentContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
`

const Blank = styled.div`
  width: 1.5rem;
`

const HeaderNavText = () => {
  return (  
    <FlexCenterBox>
      <NavContentContainer>
        <NavContentNumberFont>01</NavContentNumberFont>
        <Blank />
        <NavFont>PICK YOUR DESTINATION</NavFont>
      </NavContentContainer>
    </FlexCenterBox>
  )
}

export default HeaderNavText;