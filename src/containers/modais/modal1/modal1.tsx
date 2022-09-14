import {
  Button,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const Modal1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem w="100%" h="10">
      <Button width="full" colorScheme="teal" variant="outline" onClick={onOpen}>
        Modal 1
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam molestias repellat nostrum maiores, odio
            fugiat iure aspernatur sunt vitae eos officia aliquid, dignissimos necessitatibus numquam ipsam quos.
            Beatae, nobis dolorum.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </GridItem>
  );
};

export { Modal1 };
