import styled from 'styled-components'
import ContextType1 from '../molecules/ContextType1';
import Explore from '../atoms/Explore';

const PaddingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 3rem;
  @media screen and (min-width: 767px) {
    padding: 6.625rem 0 5.625rem;
  }
  @media screen and (min-width: 1023px) {
    flex-direction: row;
    align-items: flex-end;
    padding: 8.1825rem 10.3125rem;
  }
`

const ContextEvent = ({context}) => {
  return (
    <PaddingContainer>
      <ContextType1 context={context} />
      <Explore />
    </PaddingContainer>
  )
}

export default ContextEvent;