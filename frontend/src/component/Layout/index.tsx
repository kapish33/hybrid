import { FC, ReactNode } from 'react';
import Footer from './Footer';
import TopBar from './TopBar';
import FixedBottomNavigation from '../Common/BottomNav';

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <TopBar />
    <div>{children}</div>
    <FixedBottomNavigation />
    <Footer />
  </>
);
export default Layout;
