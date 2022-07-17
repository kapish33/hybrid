import { FC, ReactNode } from 'react';
import Footer from './Footer';
import TopBar from './TopBar';

interface Props {
  children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => (
  <>
    <TopBar />
    <div>{children}</div>
    <Footer />
  </>
);
export default Layout;
