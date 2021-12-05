import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const ImageContainer = styled.div`
  padding: 1rem;
`

const Logo = ({width, height}) => {
  return (
    <Link href="/">
      <a>
        <ImageContainer>
          <Image src="/shared/logo.svg" alt="Logo" width={width} height={height} />
        </ImageContainer>
      </a>
    </Link>
  )
}

export default Logo;