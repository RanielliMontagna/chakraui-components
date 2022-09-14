import { Icon, Text, theme } from '@chakra-ui/react';
import { Route, SideBarContainer, SideBarContent, SideBarHeader } from './sideBar.styles';

import { RiDashboardLine } from 'react-icons/ri';

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarHeader onClick={() => window.open('https://chakra-ui.com/')}>Chakra UI</SideBarHeader>
      <SideBarContent>
        <Route variant="unstyled" width="full">
          <Icon as={RiDashboardLine} w={6} h={6} />
          <Text color={theme.colors.white}>Dashboard</Text>
        </Route>
        <Route variant="unstyled" width="full">
          <Icon as={RiDashboardLine} w={6} h={6} />
          <Text color={theme.colors.white}>Dashboard</Text>
        </Route>
        <Route variant="unstyled" width="full">
          <Icon as={RiDashboardLine} w={6} h={6} />
          <Text color={theme.colors.white}>Dashboard</Text>
        </Route>
        <Route variant="unstyled" width="full">
          <Icon as={RiDashboardLine} w={6} h={6} />
          <Text color={theme.colors.white}>Dashboard</Text>
        </Route>
      </SideBarContent>
    </SideBarContainer>
  );
};

export { SideBar };
