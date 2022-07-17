import { lazy, Suspense } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { RemoveTrailingSlash } from './RemoveTrailingSlash';

const Home = lazy(() => import('../component/Home'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RemoveTrailingSlash />
    <Switch>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
    </Switch>
  </Suspense>
);
export default Routes;
