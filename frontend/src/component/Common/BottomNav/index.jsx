import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <div className='visible md:hidden'>
      <Box sx={{ pb: 7, }} ref={ref}>
        {/* <CssBaseline /> */}
        <Paper
          sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
          // style={{
          //   height: '65px',
          // }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label='Call Us' icon={<AddIcCallIcon />} />
            <BottomNavigationAction label='WhatsApp' icon={<WhatsAppIcon />} />
            <BottomNavigationAction
              label='Call Back'
              icon={<SupportAgentIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}
