import Link from 'next/link'
import { useRouter } from 'next/router';
import styled from 'styled-components'

import { NavFont } from './Context';

const VerticalTabContainer = styled.div`
  padding-bottom: 0.5rem;
  text-transform: uppercase;
  border-bottom: ${props => props.currentHref === props.targetHref ? "3px solid white" : "3px solid transparent"};
  &:hover {
    border-bottom: ${props => props.currentHref === props.targetHref ? "3px solid white" : "3px solid #979797"};
  }
`

const VerticalTab = ({item}) => {
  const router = useRouter()
  const { planet } = router.query;
  
  return (
    <Link href={item.href}>
      <a>
        <VerticalTabContainer
          currentHref={planet} 
          targetHref={item.href.split('/')[2]} 
        >
          <NavFont>{item.name}</NavFont>
        </VerticalTabContainer>
      </a>
    </Link>
  )
}

export default VerticalTab;