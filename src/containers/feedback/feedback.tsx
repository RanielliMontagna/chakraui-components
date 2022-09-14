import { Button, CircularProgress, Grid, GridItem, Stack, Text, Tooltip, useToast } from '@chakra-ui/react';

const Feedback = () => {
  const toast = useToast();

  return (
    <>
      <Grid padding={8} templateColumns="repeat(5, 2fr)">
        <GridItem gap={8} display="flex" alignItems="center">
          <Text fontSize="lg">Loader:</Text>
          <CircularProgress isIndeterminate color="green.300" />
        </GridItem>
        <GridItem>
          <Text fontSize="lg">
            <Tooltip label="Mais informações sobre o tooltip" hasArrow>
              Hover me
            </Tooltip>
          </Text>
        </GridItem>
        <GridItem>
          <Button
            onClick={() => {
              toast({
                title: 'Título da mensagem',
                description: 'Descrição da mensagem',
                duration: 2000,
                variant: 'left-accent',
                status: 'success',
                position: 'top-right',
              });
            }}
          >
            Clique aqui
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};

export { Feedback };
