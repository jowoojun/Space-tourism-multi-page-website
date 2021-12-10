import Link from 'next/link'
import { useRouter } from 'next/router';
import styled from 'styled-components'

import { Heading_4 } from './Context';

const VerticalTabCircleContainer = styled.div`
  margin: 0px 8px;
  @media screen and (min-width: 1430px) {
    margin: 16px 0;
  }
`

const VerticalTabCircleInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  border: ${props => props.currentHref === props.targetHref ? 0 : "1px solid rgba(255, 255, 255, 0.25)"};
  border-radius: 50%;
  background-color: ${props => props.currentHref === props.targetHref ? "#FFFFFF" : "transparent"};
  cursor: pointer;
  &:hover {
    border-color: #FFFFFF;
  }
  @media screen and (min-width: 767px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (min-width: 1430px) {
    width: 80px;
    height: 80px;
  }
`

const TabsText = styled(Heading_4)`
  color: ${props => props.currentHref === props.targetHref ? "#0B0D17" : "#FFFFFF" };
  letter-spacing: 2px;
`

const VerticalTabCircle = ({item, idx}) => {
  const router = useRouter()
  const { name } = router.query;
  
  return (
    <Link href={item.href}>
      <VerticalTabCircleContainer>
        <VerticalTabCircleInnerContainer
          currentHref={name} 
          targetHref={item.href.split('/')[2]} 
        >
          <TabsText currentHref={name} targetHref={item.href.split('/')[2]} >{idx + 1}</TabsText>
        </VerticalTabCircleInnerContainer>
      </VerticalTabCircleContainer>
    </Link>
  )
}

export default VerticalTabCircle;