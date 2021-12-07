import styled from 'styled-components'

import VerticalTab from '../atoms/VerticalTab'
import { FlexCenterBox } from "../atoms/FlexBox"

const VerticalTabsContainer = styled.div`
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

const tabsItem = [ 
  { 
    name: 'moon',
    href: '/destination/moon'
  }, 
  { 
    name: 'mars',
    href: '/destination/mars'
  }, 
  { 
    name: 'europa',
    href: '/destination/europa'
  }, 
  { 
    name: 'titan',
    href: '/destination/titan'
  } 
]

const VerticalTabs = () => {
  return (
    <VerticalTabsLayoutContainer>
      <VerticalTabsContainer>
        {tabsItem.map((item) => 
          <VerticalTab key={item.name} item={item} />
        )}
      </VerticalTabsContainer>
    </VerticalTabsLayoutContainer>
  )
}

export default VerticalTabs;