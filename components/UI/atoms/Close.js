import Image from 'next/image'
import styled from 'styled-components'

const ImageContainer = styled.button`
  padding: 1rem;
  border: 0;
  outlin: 0;
  background: transparent;
  margin-left: auto;
`

const Close = ({onClick, width, height}) => {
  return (
    <ImageContainer onClick={() => onClick()}>
      <Image src="/shared/icon-close.svg" alt="Close" width={width} height={height} />
    </ImageContainer>
  )
}

export default Close;