import styled from 'styled-components'

import VerticalTabText from '../atoms/VerticalTabText'
import VerticalTabCircle from '../atoms/VerticalTabCircle'
import { FlexCenterBox } from "../atoms/FlexBox"

const VerticalTabsCircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  @media screen and (min-width: 767px) {
    margin-top: 32px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1430px) {
    position: absolute;
    left: 167px;
    bottom: 94px;
    margin: 0;
  }
`

const VerticalTabsCircleLayoutContainer = styled(FlexCenterBox)`
  @media screen and (min-width: 1430px) {
    align-items: flex-start;
  }
`

const VerticalTabsCircle = ({tabItems}) => {
  return (
    <VerticalTabsCircleLayoutContainer>
      <VerticalTabsCircleContainer>
        {tabItems.map((item) => 
          <VerticalTabCircle key={item.name} item={item} />
        )}
      </VerticalTabsCircleContainer>
    </VerticalTabsCircleLayoutContainer>
  )
}

export default VerticalTabsCircle;