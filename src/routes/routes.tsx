import { BrowserRouter, Routes as RoutesV6, Route } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { Dashboard } from '../containers/dashboard/dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesV6>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </RoutesV6>
    </BrowserRouter>
  );
};

export { Routes };
