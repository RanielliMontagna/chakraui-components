import { ChakraProvider } from '@chakra-ui/react';

import { Routes } from './routes/routes';
import { GlobalStyles } from './styles/global.styles';

const App = () => {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Routes />
    </ChakraProvider>
  );
};

export default App;
