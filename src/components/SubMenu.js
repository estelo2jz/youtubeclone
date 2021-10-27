import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


import './styles/SubMenu.scss';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  list-style: none;
  height: 10px;
  text-decoration: none;
  /* font-size: 18px; */
  font-weight: 500;
  &:hover {
    background: #252831;
    border-left: 4px solid crimson;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-size: 17px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 15px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }

`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink className="submenu__links" to={item.path} onClick={item.subNav && showSubnav}>
        <div className="submenu__container">
          <span className="submenu__icon">
            {item.icon}
          </span>
          <span className="submenu__title">
            {item.title}
          </span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink className="submenu__dropdown" to={item.path} key={index}>
              <i>
                {item.icon}
              </i>
              <SidebarLabel>
                <span>
                  {item.title}
                </span>
              </SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;