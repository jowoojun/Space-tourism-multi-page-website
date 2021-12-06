import styled from 'styled-components';

import Logo from '../atoms/Logo';
import List from '../atoms/List';

const Flex_container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`

const HeaderList = ({onClick}) => {
  
  return (
    <>
      <Flex_container>
        <Logo width={40} height={40} />
        <List width={24} height={21} onClick={onClick} />
      </Flex_container>
    </>
  )
}

export default HeaderList;