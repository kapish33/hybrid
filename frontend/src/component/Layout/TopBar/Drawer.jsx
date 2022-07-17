import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { routes } from './constants';

export default function TemporaryDrawer({ Icon, sx, Menu, font }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className='text-white text-5xl text-center py-4 my-3 bg-green-700'>
          Hybrid
        </div>
        {routes.map((route, index) => (
          <>
            <ListItem
              key={index}
              onClick={() => {
                window.location.href = route.path;
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{<route.icon />}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Icon
            onClick={toggleDrawer(anchor, true)}
            sx={sx}
            aria-label='Example'
          >
            <Menu fontSize={font} />
          </Icon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
