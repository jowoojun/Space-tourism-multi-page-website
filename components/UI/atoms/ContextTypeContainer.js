import styled from 'styled-components'

export const ContextTypeContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (min-width: 1430px) {
    align-items: flex-start;
    width: auto;
  }
`
export const ContextTypeInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1430px) {
    align-items: flex-start;
  }
`