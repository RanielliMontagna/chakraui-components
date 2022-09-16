import { useNavigate } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineFileText, AiOutlineRead, AiOutlineTable } from 'react-icons/ai';
import { MdOutlineFeedback } from 'react-icons/md';

import { Avatar, Icon, Text, theme } from '@chakra-ui/react';
import { Route, SideBarContainer, SideBarContent, SideBarFooter, SideBarHeader } from './sideBar.styles';

const SideBar = () => {
  const _navigate = useNavigate();

  return (
    <SideBarContainer>
      <SideBarHeader onClick={() => window.open('https://chakra-ui.com/')}>Chakra UI</SideBarHeader>
      <SideBarContent>
        <Route variant="unstyled" width="full" onClick={() => _navigate('/')}>
          <Icon as={AiOutlineDashboard} w={6} h={6} />
          <Text color={theme.colors.white}>Dashboard</Text>
        </Route>
        <Route variant="unstyled" width="full" onClick={() => _navigate('/modais')}>
          <Icon as={AiOutlineRead} w={6} h={6} />
          <Text color={theme.colors.white}>Modais</Text>
        </Route>
        <Route variant="unstyled" width="full" onClick={() => _navigate('/feedback')}>
          <Icon as={MdOutlineFeedback} w={6} h={6} />
          <Text color={theme.colors.white}>Feedback</Text>
        </Route>
        <Route variant="unstyled" width="full" onClick={() => _navigate('/fields')}>
          <Icon as={AiOutlineFileText} w={6} h={6} />
          <Text color={theme.colors.white}>Fields</Text>
        </Route>
        <Route variant="unstyled" width="full" onClick={() => _navigate('/dataTable')}>
          <Icon as={AiOutlineTable} w={6} h={6} />
          <Text color={theme.colors.white}>DataTable</Text>
        </Route>
      </SideBarContent>
      <SideBarFooter>
        <Avatar name="Ranielli" />
        <Text color={theme.colors.white} fontSize="lg" fontWeight="thin">
          Ranielli
        </Text>
      </SideBarFooter>
    </SideBarContainer>
  );
};

export { SideBar };
