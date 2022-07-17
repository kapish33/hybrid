import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';


export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
    color: "secondary"
  },
  {
    path: '/about',
    name: 'About',
    icon: InfoIcon,
    color: "secondary"
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: AddIcCallIcon,
    color: "secondary"
  },
];
