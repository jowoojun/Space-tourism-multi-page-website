import styled from 'styled-components'

import Header from './Header'
import ImageTech from '../UI/atoms/ImageTech'
import ContextType4 from '../UI/molecules/ContextType4'
import VerticalTabsNumber from '../UI/molecules/VerticalTabsNumber'
import HeaderNavText from '../UI/molecules/HeaderNavText'

import { ImageInfo } from '../../config/designConfig'

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background: url(/technology/background-technology-mobile.jpg) no-repeat;
  background-size: cover;
  @media screen and (min-width: 767px) {
    background: url(/technology/background-technology-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1430px) {
    background: url(/technology/background-technology-desktop.jpg) no-repeat;
    background-size: cover;
  } 
`

const ABCContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1 auto;
`

const DesktopSpreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1430px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 165px;
  }
`

const ContentContainer = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1430px) {
    display: flex;
    flex-direction: row;
  }
`

const OrderBox = styled.div`
  @media screen and (min-width: 1430px) {
    order: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

const TechTemplate = ({tech, tabItems}) => {
  return (
    <PageContainer>
      <Header />
      {tech ? 
        <ABCContainer>
          <HeaderNavText number={"03"} text={"SPACE LAUNCH 101"} />
          <DesktopSpreadContainer>
            <OrderBox>
              <ImageTech image={tech.images} name={tech.name} imageInfo={ImageInfo.tech} />
            </OrderBox>
            <ContentContainer>
              <VerticalTabsNumber tabItems={tabItems}/>
              <ContextType4 contextHeader={"THE TERMINOLOGY…"} name={tech.name} context={tech.description}/>
            </ContentContainer>
          </DesktopSpreadContainer>
        </ABCContainer>
      :
        null
      }
    </PageContainer>
  )
}

export default TechTemplate;