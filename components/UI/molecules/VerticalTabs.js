import styled from 'styled-components'

import VerticalTab from '../atoms/VerticalTab'
import { FlexCenterBox } from "../atoms/FlexBox"

const VerticalTabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.625rem;
  width: 237.5px;
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
    <FlexCenterBox>
      <VerticalTabsContainer>
        {tabsItem.map((item) => 
          <VerticalTab key={item.name} item={item} />
        )}
      </VerticalTabsContainer>
    </FlexCenterBox>
  )
}

export default VerticalTabs;