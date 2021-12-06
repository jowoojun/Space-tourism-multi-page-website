import Image from 'next/image'

import { FlexCenterBox } from "../atoms/FlexBox"

const PlanetImages = ({images}) => {
  return (
    <FlexCenterBox>
      {images && <Image src={images} alt={"Planet"} width={170} height={170} /> }
    </FlexCenterBox>
  )
}

export default PlanetImages;