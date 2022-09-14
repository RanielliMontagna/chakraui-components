import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useModal2 } from './useModal2';

const Modal2 = () => {
  const { errors, register, handleSubmit, onSubmit, isSubmitting, isOpen, onOpen, handleClose } = useModal2();

  return (
    <GridItem w="100%" h="10">
      <Button width="full" colorScheme="orange" variant="outline" onClick={onOpen}>
        Modal 2
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Nome</FormLabel>
                <Input
                  id="name"
                  placeholder="Informe o nome"
                  {...register('name', {
                    required: 'O campo nome é obrigatório',
                    minLength: { value: 4, message: 'O campo nome deve ter no mínimo 4 caracteres' },
                  })}
                />
                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleClose} mr={3} width="24'">
                Cancel
              </Button>
              <Button colorScheme="blue" type="submit" width="24" isLoading={isSubmitting}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </GridItem>
  );
};

export { Modal2 };
