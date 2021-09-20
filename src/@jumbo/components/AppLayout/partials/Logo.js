import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CmtImage from '../../../../@coremat/CmtImage';

const Logo = ({ color, ...props }) => {
  const logoUrl = color === 'white' ? '/images/logonew.png' : 'images/logonew.png';
  const logoSymbolUrl = color === 'white' ? '/images/logo-white-symbol.png' : '/images/logo-symbol.png';

  return (
    <Box className="pointer" {...props}>
      <Hidden xsDown>
        <NavLink to="/">
          <CmtImage style={{ width: 243 }} src={logoUrl} alt="logo" />
        </NavLink>
      </Hidden>
      <Hidden smUp>
        <NavLink to="/">
          <CmtImage style={{ width: 243 }} src={logoSymbolUrl} alt="logo" />
        </NavLink>
      </Hidden>
    </Box>
  );
};

export default Logo;
