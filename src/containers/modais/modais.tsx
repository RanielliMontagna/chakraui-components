import { Grid } from '@chakra-ui/react';

import { Modal1 } from './modal1/modal1';
import { Modal2 } from './modal2/modal2';
import { Modal3 } from './modal3/modal3';

const Modais = () => {
  return (
    <Grid padding="8" gap="4">
      <Grid templateColumns="repeat(1, 1fr)" gap={4}>
        <Modal1 />
        <Modal2 />
      </Grid>
      <Grid>
        <Modal3 />
      </Grid>
    </Grid>
  );
};

export { Modais };
