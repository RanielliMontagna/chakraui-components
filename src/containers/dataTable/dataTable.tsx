import { SimpleGrid } from '@chakra-ui/react';
import { Table } from '../../components/table/table';

const DataTable = () => {
  return (
    <SimpleGrid padding={4}>
      <Table />
    </SimpleGrid>
  );
};

export { DataTable };
