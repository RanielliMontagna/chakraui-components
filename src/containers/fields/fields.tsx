import { FormControl, IconButton, SimpleGrid, Stack, Switch, Text, Textarea } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
import { Input } from '../../components/input/input';
import { NumberInput } from '../../components/numberInput/numberInput';

const Fields = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <FormControl>
        <SimpleGrid columns={[1]} padding="8" gap="4">
          <SimpleGrid columns={[1, 2, 2]} gap="4">
            <NumberInput
              placeholder="10.00"
              numberInputProps={{
                precision: 2,
              }}
            />
            <NumberInput
              numberInputProps={{
                defaultValue: 100,
              }}
            />
          </SimpleGrid>
          <SimpleGrid columns={[1, 2, 3]} gap="4">
            <Input placeholder="Informe o texto" />
            <Input defaultValue="Teste" />
            <Input />
          </SimpleGrid>
          <SimpleGrid display="flex" gap="8">
            <Stack direction="row" alignItems="center">
              <Switch colorScheme="teal" size="lg" />
              <Text>Teste</Text>
            </Stack>
            <IconButton colorScheme="blue" aria-label="Search database" icon={<MdSearch />} />
          </SimpleGrid>
          <SimpleGrid>
            <Textarea placeholder="Here is a sample placeholder" size="sm" />
          </SimpleGrid>
        </SimpleGrid>
      </FormControl>
    </div>
  );
};

export { Fields };
