import {
  Button,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const Modal3 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem w="100%" h="10">
      <Button width="full" colorScheme="purple" variant="outline" onClick={onOpen}>
        Modal 3
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores repellat, dolor dolores iste recusandae
            dolore saepe consequatur nemo dicta accusantium ad eius exercitationem excepturi tempora, quas omnis, sit
            velit odio.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="green">
              Entendi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </GridItem>
  );
};

export { Modal3 };
