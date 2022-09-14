import {
  NumberInput as NumberInputChakra,
  NumberInputField,
  NumberInputFieldProps,
  NumberInputProps as NumberInputPropsChakra,
} from '@chakra-ui/react';

interface NumberInputProps extends NumberInputFieldProps {
  numberInputProps?: NumberInputPropsChakra;
}

const NumberInput = ({ numberInputProps, ...rest }: NumberInputProps) => {
  return (
    <NumberInputChakra variant="outline" borderColor="purple.200" bg="whiteAlpha.100" {...numberInputProps}>
      <NumberInputField
        borderColor="purple.400"
        _hover={{
          borderColor: 'purple.300',
        }}
        {...rest}
      />
    </NumberInputChakra>
  );
};

export { NumberInput };
