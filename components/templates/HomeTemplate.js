import styled from 'styled-components'

import Header from './Header'
import ContextExplore from '../UI/organisms/ContextExplore'

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background: url(/home/background-home-mobile.jpg) no-repeat;
  background-size: cover;

  @media screen and (min-width: 767px) {
    background: url(/home/background-home-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1430px) {
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