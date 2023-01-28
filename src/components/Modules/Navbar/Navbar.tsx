import { NavbarPropsType } from './Navbar.types';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Avatar, Button, Chip, Icon, Text } from '../../Atoms';
import Link from 'next/link';

const Navbar: React.FC<NavbarPropsType> = ({ ...props }) => {
  return (
    <NavbarContainer>
      <div className="drawer-menu">
        <div
          className="icon-wrapper cursor-pointer"
          onClick={() => props.onOpenHandler()}
        >
          {props.isOpen ? <Icon name="close" /> : <Icon name="menu" />}
        </div>
      </div>

      {props.isOpen && (
        <div className="drawer-menu open">
          {!props.user && (
            <div className="login">
              <Link href={'/'}>
                <a>
                  <Text type="medium-l cursor-pointer" value="로그인 하러가기" />
                </a>
              </Link>
            </div>
          )}
          {props.user && (
            <div className="user-contents">
              <div className="profile-contents">
                <div className="avatar">
                  <Avatar profile={props.user.profileImg} />
                </div>
                <div className="info">
                  {props.user.level && (
                    /* TODO: CHIP LEVEL REFACTOR */
                    <Chip
                      color={
                        props.user.level === '십리'
                          ? 'var(--surface-500)'
                          : props.user.level === '백리'
                          ? '#FFB79A'
                          : props.user.level === '천리'
                          ? 'var(--secondary-500)'
                          : 'var(--primary-500)'
                      }
                      bgColor={
                        props.user.level === '십리'
                          ? 'var(surface-50)'
                          : props.user.level === '백리'
                          ? '#FCF9F0'
                          : props.user.level === '천리'
                          ? 'var(--secondary-50)'
                          : 'var(--primary-50)'
                      }
                    >
                      {props.user.level}
                    </Chip>
                  )}
                  <Text type="regular-m nickname" value={props.user.nickname} />
                </div>
              </div>
              <Button
                width="6.125rem"
                padding="0"
                fontSize="1.75rem"
                bg="none"
                color="var(--text-200)"
                onAction={props.logout}
              >
                로그아웃
              </Button>
            </div>
          )}
          <ul className="menu-list">
            <li className="menu cursor-pointer">
              <Link href={'/'}>
                <a>
                  <Text type="medium-l link" align="left" value="홈" />
                </a>
              </Link>
            </li>
            <li className="menu cursor-pointer">
              <Link href={'/root/add'}>
                <a>
                  <Text type="medium-l link" align="left" value="경로등록 바로가기" />
                </a>
              </Link>
            </li>
            <li className="menu cursor-pointer">
              <Link href={props.user ? '/mypage' : '/login'}>
                <a>
                  <Text type="medium-l link" align="left" value="마이페이지" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  position: relative;
  & .drawer-menu {
    width: 100%;
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

  & .open {
    position: fixed;
    left: 0;
    top: 7.875rem;
    display: block;
    padding: 1.3125rem 2rem;
    width: 100%;
    z-index: 200;
    height: 100vh;
    background: rgba(255, 255, 255, 0.66);
    backdrop-filter: blur(12px);
    overflow: auto;
    box-sizing: border-box;

    & .login {
      width: 100%;
    }
    & .user-contents {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .profile-contents {
        display: flex;
        align-items: center;
        & .avatar {
          margin-right: 2rem;
        }
        & .nickname {
          margin-top: 0.5rem;
        }
      }
    }
    & .menu-list {
      margin-top: 1rem;
      & .menu {
        height: 8rem;
        & .link {
          line-height: 8rem;
        }
      }
    }
  }
`;

export default Navbar;
