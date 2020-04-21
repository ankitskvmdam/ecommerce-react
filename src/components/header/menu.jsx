import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { NavLink as Link } from 'react-router-dom'

// URL
import { SELLER_LOGIN, HOME, ABOUT, CONTACT } from '../../common/script/url'

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} color="secondary" variant="contained">
                Menu
      </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}><Link to={HOME} className="nav-link" activeClassName="nav-active">Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={SELLER_LOGIN} className="nav-link" activeClassName="nav-active">Sell with us</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={ABOUT} className="nav-link" activeClassName="nav-active">About</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={CONTACT} className="nav-link" activeClassName="nav-active">Contact us</Link></MenuItem>
            </Menu>
        </div>
    );
}
