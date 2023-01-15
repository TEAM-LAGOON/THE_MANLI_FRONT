import { NavbarPropsType } from './Navbar.types';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Icon } from '../../Atoms';

const Navbar: React.FC<NavbarPropsType> = () => {
  //TODO: menu 닫는 버튼이 있을 경우는 외부에 상태관리, 아닐 경우 내부에 관리. 디자인 나오는 것 체크 후 변경 예정
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <NavbarContainer>
      {!isMenuOpen && (
        <div className="drawer-menu">
          <div
            className="icon-wrapper cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            <Icon name="menu" />
          </div>
        </div>
      )}
      {isMenuOpen && (
        <ul>
          <li>메뉴</li>
          <li>디자인 필요</li>
        </ul>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.header`
  & .drawer-menu {
    height: 7.875rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    border-bottom: 0.125rem solid var(--surface-100);

    & .icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.25rem;
      width: 5.5rem;
      height: 5.5rem;
    }
  }
`;

export default Navbar;
