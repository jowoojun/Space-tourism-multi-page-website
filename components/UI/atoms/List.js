import Image from 'next/image'
import styled from 'styled-components'

const ImageContainer = styled.button`
  padding: 1.5rem;
  border: 0;
  outlin: 0;
  background: transparent;
  cursor: pointer;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

const List = ({onClick, width, height}) => {
  return (
    <ImageContainer onClick={() => onClick()}>
      <Image src="/shared/icon-hamburger.svg" alt="List" width={width} height={height} />
    </ImageContainer>
  )
}

export default List;