import { Text, Highlight } from '@chakra-ui/react';
import { center } from '../../styles/shared.styles';

const Dashboard = () => {
  return (
    <div style={{ ...center, height: '100%', flexDirection: 'column', padding: 16 }}>
      <Text fontSize="3xl" fontWeight="hairline" align="center">
        Bem vindo ao dashboard
      </Text>

      <Text align="center">
        <Highlight query="chakra-ui" styles={{ px: '1', py: '1', bg: 'teal.100' }}>
          Aqui podemos testar os componentes do chakra-ui
        </Highlight>
      </Text>
    </div>
  );
};

export { Dashboard };
