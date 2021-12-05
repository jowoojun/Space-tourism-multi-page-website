import Logo from '../atoms/Logo';
import List from '../atoms/List';
import styled from 'styled-components';

const Flex_container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`

const Header = ({}) => {
  return (
    <Flex_container>
      <Logo width={40} height={40} />
      <List width={24} height={21} />
    </Flex_container>
  )
}

export default Header;