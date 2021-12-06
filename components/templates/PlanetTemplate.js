import styled from 'styled-components'

import Header from './Header'

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(/destination/background-destination-mobile.jpg) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767px) {
    background: url(/destination/background-destination-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1023px) {
    background: url(/destination/background-destination-desktop.jpg) no-repeat;
    background-size: cover;
  } 
`

const PlanetTemplate = ({}) => {
  return (
    <PageContainer>
      <Header />
      
    </PageContainer>
  )
}

export default PlanetTemplate;