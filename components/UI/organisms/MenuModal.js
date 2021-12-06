import styled from 'styled-components'

import NavItem from "../molecules/NavItem";
import Close from '../atoms/Close';

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 68%;
  height: 100%;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
`

const IconHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 0.6rem;
`

const NavTextBody = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 auto;
`

const MenuModal = ({menuList, onClick}) => {
  return (
    <Modal>
      <IconHeader>
        <Close width={20} height={20} onClick={onClick} />
      </IconHeader>
      <NavTextBody>
        <NavItem menuList={menuList} />
      </NavTextBody>
    </Modal>
  )
}

export default MenuModal;