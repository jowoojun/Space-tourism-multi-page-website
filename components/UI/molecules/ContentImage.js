import Image from 'next/image'
import styled from 'styled-components'

import { FlexCenterBox } from "../atoms/FlexBox"

const ContentImageContainer = styled.div`
  position: relative;
  width: ${props => props.imageInfo.mobile.width};
  height: ${props => props.imageInfo.mobile.height};

  @media screen and (min-width: 767px) {
    width: ${props => props.imageInfo.tablet.width};
    height: ${props => props.imageInfo.tablet.height};
  }
  @media screen and (min-width: 1400px) {
    width: ${props => props.imageInfo.desktop.width};
    height: ${props => props.imageInfo.desktop.height};
  }
`

const ContentImage = ({images, name, imageInfo}) => {
  return (
    <FlexCenterBox>
      <ContentImageContainer imageInfo={imageInfo}>
        <Image src={images.png} alt={name} objectFit="contain" layout='fill' />
      </ContentImageContainer>
    </FlexCenterBox>
  )
}

export default ContentImage;