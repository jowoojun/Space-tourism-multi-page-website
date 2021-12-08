import styled from 'styled-components'

import VerticalTabText from '../atoms/VerticalTabText'
import { FlexCenterBox } from "../atoms/FlexBox"

const VerticalTabsTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.625rem;
  width: 237.5px;

  @media screen and (min-width: 767px) {
    padding-top: 53px;
  }
  @media screen and (min-width: 1023px) {
    padding-top: 0px;
  }
`

const VerticalTabsLayoutContainer = styled(FlexCenterBox)`
  @media screen and (min-width: 1023px) {
    align-items: flex-start;
  }
`

const VerticalTabsText = ({tabItems}) => {
  return (
    <VerticalTabsLayoutContainer>
      <VerticalTabsTextContainer>
        {tabItems.map((item) => 
          <VerticalTabText key={item.name} item={item} />
        )}
      </VerticalTabsTextContainer>
    </VerticalTabsLayoutContainer>
  )
}

export default VerticalTabsText;