import styled from 'styled-components'

import Header from './Header'
import ContextExplore from '../UI/organisms/ContextExplore'
import BackgroundImageContainer from '../UI/atoms/BackgroundImageContainer'

const PageContainer = styled(BackgroundImageContainer)`
  background: url(/home/background-home-mobile.jpg) no-repeat;
  background-size: cover;

  @media screen and (min-width: 767px) {
    background: url(/home/background-home-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1023px) {
    background: url(/home/background-home-desktop.jpg) no-repeat;
    background-size: cover;
    justify-content: space-between;
  } 
`

const HomeTemplate = ({context}) => {
  return (
    <PageContainer>
      <Header />
      <ContextExplore context={context}/>
    </PageContainer>
  )
}

export default HomeTemplate