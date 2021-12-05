import styled from 'styled-components'
import ThreeContext from '../molecules/ThreeContext';
import Explore from '../atoms/Explore';

const PaddingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 3rem;
  
  @media screen and (min-width: 1023px) {
    flex-direction: row;
  }
`

const ContextEvent = ({gap1, gap2, context}) => {
  return (
    <PaddingContainer>
      <ThreeContext gap1={gap1} gap2={gap2} context={context} />
      <Explore />
    </PaddingContainer>
  )
}

export default ContextEvent;