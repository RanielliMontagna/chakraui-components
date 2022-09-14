import { theme } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../sideBar/sideBar';

export const Layout = () => {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: theme.colors.gray[50], display: 'flex' }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};
