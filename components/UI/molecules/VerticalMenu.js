import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components'

import { NavFont, NavNumberFont } from '../atoms/Context'

import fillZero from '../../../utils/fillZero'

const VerticalMenuContainer = styled.div`
  display: none;

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    height: 100%;
    padding: 0 3rem;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }
  @media screen and (min-width: 1023px) {
    width: 830px;
  }
`

const MenuItemContainer = styled.div`
  display: flex;
  padding: 2.25rem 0;
  margin-top: 3px;
  border-bottom: ${props => props.currentHref === props.targetHref ? "3px solid white" : "3px solid transparent"};
  &:hover {
    border-bottom: ${props => props.currentHref === props.targetHref ? "3px solid white" : "3px solid #979797"};
  }
`

const Blank = styled.div`
  @media screen and (min-width: 1023px) {
    margin-left: 11px;
  }
`

const VerticalMenu = ({menuList}) => {
  const router = useRouter()

  return (
    <VerticalMenuContainer>
      {menuList.map((menu, idx) => 
        <Link key={menu.text} href={menu.href}>
          <a>
            <MenuItemContainer 
              currentHref={router.pathname === '/' ? '/' : router.pathname.split('/')[1]} 
              targetHref={menu.href === '/' ? '/' : menu.href.split('/')[1]} 
            >
              <NavNumberFont>{fillZero(2, idx)}</NavNumberFont>
              <Blank />
              <NavFont>{menu.text}</NavFont>
            </MenuItemContainer>
          </a>
        </Link>
      )}
    </VerticalMenuContainer>
  )
}

export default VerticalMenu;