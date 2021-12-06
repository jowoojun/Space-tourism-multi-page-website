import { useState } from 'react';

import HeaderList from '../UI/organisms/HeaderList';
import MenuModal from '../UI/organisms/MenuModal';

const menuList = [
  {
    text: 'HOME',
    href: '/'
  },
  {
    text: 'DESTINATION',
    href: '/destination'
  },
  {
    text: 'CREW',
    href: '/crew'
  },
  {
    text: 'TECHNOLOGY',
    href: '/technologoy'
  }
]

const Header = ({}) => {
  const [modalToggle, setModalToggle] = useState(false);
  function onClickOpen() {
    setModalToggle(true)
  }

  function onClickClose() {
    setModalToggle(false)
  }

  return (
    <>
      {modalToggle && <MenuModal menuList={menuList} onClick={onClickClose}/> }
      <HeaderList onClick={onClickOpen}/>
    </>
  )
}

export default Header;