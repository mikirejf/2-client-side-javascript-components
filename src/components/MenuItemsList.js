import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';

MenuItemsList.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function MenuItemsList({ menuItems }) {
  return (
    <div className="grid mb-8">
      {menuItems.map((menuItemProps, i) => (
        <MenuItem {...menuItemProps} key={i} />
      ))}
    </div>
  );
}
