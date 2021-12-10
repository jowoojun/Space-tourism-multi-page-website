import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const WhiteCircleContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
  cursor: pointer;
  @media (min-width: 767px) {
    width: 242px;
    height: 242px;
  }
  @media (min-width: 1430px) {
    width: 274px;
    height: 274px;
  }
`

const WhiteCircleText = styled.div`
  font-family: 'Bellefair', serif;
  font-size: 20px;
  letter-spacing: 1.25px;
  color: #0B0D17;

  @media (min-width: 767px) {
    font-size: 32px;
    letter-spacing: 2px;
  }
`

const HoverEventCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.1;
  border-radius: 50%;
  @media (min-width: 767px) {
    width: 375px;
    height: 375px;
  }
  @media (min-width: 1430px) {
    width: 450px;
    height: 450px;
  }
`

const Explore = () => {
  const [HoverToggle, setHoverToggle] = useState(false);
  function onMouseOver() {
    setHoverToggle(true)
  }

  function onMouseOut() {
    setHoverToggle(false)
  }

  return (
    <Link href="/">
      <WhiteCircleContainer onMouseOver={() => onMouseOver()} onMouseOut={() => onMouseOut()}>
        <WhiteCircleText>EXPLORE</WhiteCircleText>
        {HoverToggle && <HoverEventCircle />}
      </WhiteCircleContainer>
    </Link>
  )
}

export default Explore;