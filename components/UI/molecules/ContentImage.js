import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { FlexCenterBox } from "../atoms/FlexBox"

import useDeviceSize from '../../../hooks/useDeviceSize'

const ContentImageContainer = styled.div`
  position: relative;
  width: ${props => props.imageInfo.mobile.width};
  height: ${props => props.imageInfo.mobile.height};

  @media screen and (min-width: 767px) {
    width: ${props => props.imageInfo.tablet.width};
    height: ${props => props.imageInfo.tablet.height};
  }
  @media screen and (min-width: 1430px) {
    width: 100%;
    height: 100%;
  }
`

const ContentImage = ({images, name, imageInfo}) => {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const [width, height] = useDeviceSize()

  function onLoadingComplete(size) {
    setImageWidth(size.naturalHeight)
    setImageHeight(size.naturalHeight)
  }

  return (
    <FlexCenterBox imageInfo={imageInfo}>
      <ContentImageContainer imageInfo={imageInfo}>
        { width < 1440 && <Image src={images.png} alt={name} objectFit="contain" layout='fill' /> }
        { width >= 1440 && <Image src={images.png} alt={name} objectFit="contain" layout={'responsive'} width={imageWidth} height={imageHeight} onLoadingComplete={(size) => onLoadingComplete(size)}/> }
      </ContentImageContainer>
    </FlexCenterBox>
  )
}

export default ContentImage;