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
    path: 'https://kapish.netlify.app',
    name: 'About',
    icon: InfoIcon,
    color: "secondary"
  },
  {
    path: 'tel:+8707559369',
    name: 'Contact',
    icon: AddIcCallIcon,
    color: "secondary"
  },
];
