import Link from 'next/link'
import { useRouter } from 'next/router';
import styled from 'styled-components'

const VerticalTabCircleContainer = styled.div`
  padding: 8px 8px 0;
  @media screen and (min-width: 1430px) {
    padding: 8px 12px 0;
  }
`

const VerticalTabCircleInnerContainer = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  opacity: ${props => props.currentHref === props.targetHref ? "1" : "0.5"};
  &:hover {
    opacity: ${props => props.currentHref === props.targetHref ? "1" : "0.17"};
  }
`

const VerticalTabCircle = ({item}) => {
  const router = useRouter()
  const { name } = router.query;
  
  return (
    <Link href={item.href}>
      <VerticalTabCircleContainer>
        <VerticalTabCircleInnerContainer
          currentHref={name} 
          targetHref={item.href.split('/')[2]} 
        />
      </VerticalTabCircleContainer>
    </Link>
  )
}

export default VerticalTabCircle;