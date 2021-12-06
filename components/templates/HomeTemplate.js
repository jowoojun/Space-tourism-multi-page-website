import styled from 'styled-components'

import Header from './Header'
import ContextEvent from '../UI/organisms/ContextEvent'

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(/home/background-home-mobile.jpg) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767px) {
    background: url(/home/background-home-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1023px) {
    background: url(/home/background-home-desktop.jpg) no-repeat;
    background-size: cover;
  } 
`

const HomeTemplate = ({context}) => {
  return (
    <PageContainer>
      <Header />
      <ContextEvent context={context}/>
    </PageContainer>
  )
}

export default HomeTemplate