import * as React from 'react'
import Menu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'


const MenuPopup = () => {
  const popupStateHome = usePopupState({ variant: 'popover', popupId: 'homeMenu' })
  const popupStateBranch = usePopupState({ variant: 'popover', popupId: 'branchMenu' })
  const about = () => {
    console.log("About");
    popupStateHome.close();
  }
  return (
    <React.Fragment>
      <Button variant="contained" {...bindHover(popupStateHome)}>
        Home
      </Button>
      <Button variant="contained" {...bindHover(popupStateBranch)}>
        Home1
      </Button>
      <Menu
        {...bindMenu(popupStateHome)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={about}>
          <NavLink to="/" style={{textDecoration: 'none'}}>About Us</NavLink>
        </MenuItem>
        <MenuItem onClick={popupStateHome.close}>
            <NavLink to="/User" style={{textDecoration: 'none'}}>User</NavLink>
        </MenuItem>
      </Menu>
      <Menu
        {...bindMenu(popupStateBranch)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <MenuItem onClick={popupStateBranch.close}>Branch</MenuItem>
        <MenuItem onClick={popupStateBranch.close}>Branch Address</MenuItem>
      </Menu>
    </React.Fragment>
    
  )
}

export default MenuPopup