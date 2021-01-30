import React from 'react';
import './styles/SidebarRow.css';

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
      <Icon className="sidebarRow__icon" />
      <p className="sidebarRow__title">{title}</p>
    </div>
  )
}

export default SidebarRow;
