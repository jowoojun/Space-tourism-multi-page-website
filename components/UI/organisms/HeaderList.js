import styled from 'styled-components';

import VericalMenu from '../molecules/VerticalMenu'
import Logo from '../atoms/Logo';
import List from '../atoms/List';

const Flex_container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderList = ({menuList, onClick}) => {
  return (
    <Flex_container>
      <Logo width={40} height={40} />
      <List width={24} height={21} onClick={onClick} />
      <VericalMenu menuList={menuList} />
    </Flex_container>
  )
}

export default HeaderList;