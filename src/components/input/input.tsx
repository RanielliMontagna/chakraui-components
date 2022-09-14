import { Input as InputChakra, InputProps } from '@chakra-ui/react';

const Input = (props: InputProps) => {
  return (
    <InputChakra
      variant="outline"
      borderColor="purple.200"
      focusBorderColor="purple.400"
      bg="whiteAlpha.100"
      _hover={{
        borderColor: 'purple.300',
      }}
      {...props}
    />
  );
};

export { Input };
