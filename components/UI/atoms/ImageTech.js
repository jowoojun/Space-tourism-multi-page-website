import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { FlexCenterBox } from "./FlexBox"

import useDeviceSize from '../../../hooks/useDeviceSize'

const ContentImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.imageInfo.mobile.height};

  @media screen and (min-width: 767px) {
    height: ${props => props.imageInfo.tablet.height};
  }
  @media screen and (min-width: 1430px) {
    width: ${props => props.imageInfo.desktop.width};
    height: ${props => props.imageInfo.desktop.height};
  }
`

const ImageTech = ({image, name, imageInfo}) => {
  const [width, height] = useDeviceSize()

  return (
    <FlexCenterBox imageInfo={imageInfo}>
      <ContentImageContainer imageInfo={imageInfo}>
        { width < 1440 && <Image src={image.landscape} alt={name} objectFit="cover" layout='fill' /> }
        { width >= 1440 && <Image src={image.portrait} alt={name} objectFit="cover" layout='fill' /> }
      </ContentImageContainer>
    </FlexCenterBox>
  )
}

export default ImageTech;