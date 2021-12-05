import Image from 'next/image'
import styled from 'styled-components'

const ImageContainer = styled.button`
  padding: 1rem;
  border: 0;
  outlin: 0;
  background: transparent;
`

const List = ({width, height}) => {
  return (
    <ImageContainer>
      <Image src="/shared/icon-hamburger.svg" alt="List" width={width} height={height} />
    </ImageContainer>
  )
}

export default List;