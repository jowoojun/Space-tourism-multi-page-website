import styled from 'styled-components'

const WhiteCircleContainer = styled.div`
  width: 150px;
  height: 150px;
  max-width: 274px;
  max-height: 274px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Explore = () => {
  return (
    <WhiteCircleContainer>
      <WhiteCircleText>EXPLORE</WhiteCircleText>
    </WhiteCircleContainer>
  )
}

export default Explore;