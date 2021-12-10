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
    href: '/destination/moon'
  },
  {
    text: 'CREW',
    href: '/crew/douglas_hurley'
  },
  {
    text: 'TECHNOLOGY',
    href: '/technologoy/launch_vehicle'
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
      <HeaderList menuList={menuList} onClick={onClickOpen}/>
    </>
  )
}

export default Header;