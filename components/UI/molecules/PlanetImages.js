import Image from 'next/image'

import { FlexCenterBox } from "../atoms/FlexBox"

const PlanetImages = ({images}) => {
  return (
    <FlexCenterBox>
      <Image src={images.png} alt={"Planet"} width={170} height={170} />
    </FlexCenterBox>
  )
}

export default PlanetImages;