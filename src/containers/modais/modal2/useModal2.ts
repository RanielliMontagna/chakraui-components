import { useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import type { Modal2FormValues } from './modal2.types';

export const useModal2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Modal2FormValues>();

  function onSubmit(values: Modal2FormValues) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(values);
        onClose();
        reset();
      }, 3000);
    });
  }

  function handleClose() {
    onClose();
    reset();
  }

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    isSubmitting,
    isOpen,
    onOpen,
    handleClose,
  };
};
