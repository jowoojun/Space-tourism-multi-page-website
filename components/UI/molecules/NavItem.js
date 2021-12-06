import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components'

import { NavFont, NavNumberFont } from "../atoms/Context";

import fillZero from '../../../utils/fillZero'

const NavMenuItemContainer = styled.ul`
  width: 100%;
  padding: 0;
`

const Blank = styled.div`
  margin-left: 11px;
`

const NavTextContainer = styled.a`
  display: flex;
  padding: 1rem 2rem;
  &:hover {
    border-right: 4px solid #979797;
    cursor: pointer;
  }
`

const NavItem = ({menuList}) => {
  const router = useRouter()
  
  return (
    <NavMenuItemContainer>
      {menuList.map((menu, idx) => 
        <Link href={menu.href}>
          <li>
            <NavTextContainer style={{borderRight: router.pathname === menu.href && "4px solid white"}} >
              <NavNumberFont>{fillZero(2, idx)}</NavNumberFont>
              <Blank />
              <NavFont>{menu.text}</NavFont>
            </NavTextContainer>
          </li>
        </Link>
      )}
    </NavMenuItemContainer>
  )
}

export default NavItem;