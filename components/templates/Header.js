import { useState } from 'react';

import HeaderList from '../UI/organisms/HeaderList';

const Header = ({}) => {
  const [modalToggle, setModalToggle] = useState(false);
  function onClick() {
    setModalToggle(!modalToggle)
  }

  return (
    <>
      <HeaderList onClick={onClick}/>
    </>
  )
}

export default Header;