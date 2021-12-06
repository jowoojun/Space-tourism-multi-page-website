import styled from 'styled-components'

const DefaultFont = styled.p`
  margin: 0;
  padding: 0;
`

export const Heading_1 = styled(DefaultFont)`
  font-family: 'Bellefair', serif;
  font-size: 80px;
  line-height: 100px;
  font-weight: 400;
  color: white;

  @media screen and (min-width: 767px) {
    font-size: 150px;
    line-height: 150px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 150px;
    line-height: auto;
  }
`

export const Heading_2 = styled(DefaultFont)`
  font-family: 'Bellefair', serif;
  font-size: 56px;
  font-weight: 400;
  color: white;

  @media screen and (min-width: 767px) {
    font-size: 80px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 100px;
  }
`

export const Heading_3 = styled(DefaultFont)`
  font-family: 'Bellefair', serif;
  font-size: 24px;
  font-weight: 400;
  color: white;

  @media screen and (min-width: 767px) {
    font-size: 40px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 56px;
  }
`

export const Heading_4 = styled(DefaultFont)`
  font-family: 'Bellefair', serif;
  font-size: 16px;
  font-weight: 400;
  color: white;

  @media screen and (min-width: 767px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 32px;
  }
`

export const Heading_5 = styled(DefaultFont)`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  font-weight: 400;
  color: #D0D6F9;

  @media screen and (min-width: 767px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 28px;
    letter-spacing: 4.72px;
  }
`

export const SubHeading_1 = styled(DefaultFont)`
  font-family: 'Bellefair', serif;
  font-size: 28px;
  font-weight: 400;
  color: white;
`

export const SubHeading_2 = styled(DefaultFont)`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  letter-spacing: 2.35px;
  font-weight: 400;
  color: white;
`

export const NavFont = styled(DefaultFont)`
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  font-weight: 400;
  color: white;

  @media screen and (min-width: 767px) {
    font-size: 14px;
    letter-spacing: 2.36px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`

export const NavNumberFont = styled(NavFont)`
  font-weight: 700;
  @media screen and (min-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 1023px) {
    display: block;
  }
`

export const BodyFont = styled(DefaultFont)`
  font-family: 'Barlow', sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: #D0D6F9;
  text-align: center;

  @media screen and (min-width: 767px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (min-width: 1023px) {
    font-size: 18px;
    line-height: 32px;
    text-align: left;
  }
`