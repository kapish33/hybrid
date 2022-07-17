import React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    // we can define our own colors AND but we should have same as parametered colors in our map
    primary: {
      main: '#099683',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});
const RouteButton = ({ Icon, name ,color}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button color={color} startIcon={<Icon />}>{name}</Button>
    </ThemeProvider>
  );
};

export default RouteButton;
