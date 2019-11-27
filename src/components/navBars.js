import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import { FaBars } from "react-icons/fa";

const MobileNavigation = props => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="mobile-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FaBars />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <a href="#portfolio">
          <MenuItem>Portfolio</MenuItem>
        </a>
        <a href="#team">
          <MenuItem>Team</MenuItem>
        </a>
        <a href="contact">
          <MenuItem>Contact</MenuItem>
        </a>
      </Menu>
    </div>
  );
};

export default MobileNavigation;
