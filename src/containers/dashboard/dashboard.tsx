import { Text } from '@chakra-ui/react';
import { center } from '../../styles/shared.styles';

const Dashboard = () => {
  return (
    <div style={{ ...center, height: '100%', flexDirection: 'column', padding: 16 }}>
      <Text fontSize="3xl" fontWeight="hairline" align="center">
        Bem vindo ao dashboard
      </Text>
      <Text align="center">Aqui podemos testar os componentes do chakra-ui</Text>
    </div>
  );
};

export { Dashboard };
