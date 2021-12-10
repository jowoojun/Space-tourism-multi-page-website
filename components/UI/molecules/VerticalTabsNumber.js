import styled from 'styled-components'

import VerticalTabText from '../atoms/VerticalTabText'
import VerticalTabNumber from '../atoms/VerticalTabNumber'
import { FlexCenterBox } from "../atoms/FlexBox"

const VerticalTabsCircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 26px;
  @media screen and (min-width: 767px) {
    margin-top: 56px;
    margin-bottom: 44px;
  }
  @media screen and (min-width: 1430px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: -16px 80px -16px 0;
  }
`

const VerticalTabsCircle = ({tabItems}) => {
  return (
     <VerticalTabsCircleContainer>
      {tabItems.map((item, idx) => 
        <VerticalTabNumber key={item.name} idx={idx} item={item} />
      )}
    </VerticalTabsCircleContainer>
  )
}

export default VerticalTabsCircle;