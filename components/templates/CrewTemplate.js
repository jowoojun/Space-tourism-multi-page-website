import styled from 'styled-components'

import BackgroundImageContainer from '../UI/atoms/BackgroundImageContainer'
import Header from './Header'
import ContentImage from '../UI/molecules/ContentImage'
import ContextType3 from '../UI/molecules/ContextType3'
import VerticalTabsCircle from '../UI/molecules/VerticalTabsCircle'
import HeaderNavText from '../UI/molecules/HeaderNavText'

import { ImageInfo } from '../../config/designConfig'

const PageContainer = styled(BackgroundImageContainer)`
  background: url(/crew/background-crew-mobile.jpg) no-repeat;
  background-size: cover;
  @media screen and (min-width: 767px) {
    background: url(/crew/background-crew-tablet.jpg) no-repeat;
    background-size: cover;
  }
  @media screen and (min-width: 1023px) {
    background: url(/crew/background-crew-desktop.jpg) no-repeat;
    background-size: cover;
    justify-content: space-between;
  } 
`

const DesktopSpreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1023px) {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 165px;
  }
`

const BorderBox = styled.div`
  border-bottom: 1px solid #383b4b;
  @media screen and (min-width: 767px) {
    order: 3;
    border: 0;
  }
  @media screen and (min-width: 1023px) {
    width: 40%;
    height: 100%;
  }
`

const VerticalTabsOrderContainer = styled.div`
  @media screen and (min-width: 767px) {
    order: 2;
    border: 0;
  }
`

const ContentContainer = styled.div`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1023px) {
    flex-shrink: 0;
    padding-left: 165px;
  }
`

const CrewTemplate = ({crew, tabItems}) => {
  return (
    <PageContainer>
      <Header />
      {crew ? 
        <>
          <HeaderNavText number={"02"} text={"MEET YOUR CREW"} />
          <DesktopSpreadContainer>
            <BorderBox>
              <ContentImage images={crew.images} name={crew.name} imageInfo={ImageInfo.crew} />
            </BorderBox>
            <ContentContainer>
              <VerticalTabsOrderContainer>
                <VerticalTabsCircle tabItems={tabItems}/>
              </VerticalTabsOrderContainer>
              <ContextType3 contextHeader={crew.role} name={crew.name} context={crew.bio}/>
            </ContentContainer>
          </DesktopSpreadContainer>
        </>
      :
        null
      }
    </PageContainer>
  )
}

export default CrewTemplate;