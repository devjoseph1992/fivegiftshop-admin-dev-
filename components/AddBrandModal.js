import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
 Modal,
 ModalOverlay,
 ModalContent,
 ModalHeader,
 ModalFooter,
 ModalBody,
 ModalCloseButton,
 FormControl,
 FormLabel,
 Button,
 Input,
 useDisclosure,
 useToast,
} from '@chakra-ui/react';
import { createBrand } from '@/lib/db';
import { useAuth } from '@/utils/auth';

const AddBrandModal = () => {
 const toast = useToast();
 const auth = useAuth();
 const { isOpen, onOpen, onClose } = useDisclosure();
 const { handleSubmit, register } = useForm();

 const onCreateBrand = ({ name }) => {
  const newBrand = {
   sellerId: auth.user.uid,
   sellerName: auth.user.email,
   createdAt: new Date().toISOString(),
   name,
  };
  createBrand(newBrand);
  toast({
   title: 'Success!',
   description: "We've added your brand.",
   status: 'success',
   duration: 5000,
   isClosable: true,
  });
  mutate(
   '/api/brands',
   async (data) => {
    return { brands: [...data.brands, newBrand] };
   },
   false
  );
  onClose();
 };

 return (
  <>
   <Button fontWeight='medium' maxW='200px' onClick={onOpen}>
    Add Your First Product
   </Button>
   <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent as='form' onSubmit={handleSubmit(onCreateBrand)}>
     <ModalHeader fontWeight='bold'>Add Brand</ModalHeader>
     <ModalCloseButton />
     <ModalBody pb={6}>
      <FormControl>
       <FormLabel>Brand</FormLabel>
       <Input
        placeholder='Brand'
        name='name'
        ref={register({
         required: 'Required',
        })}
       />
      </FormControl>
      {/* 
      <FormControl mt={4}>
       <FormLabel>Seller Name</FormLabel>
       <Input
        placeholder='Seller Name'
        name='seller'
        ref={register({
         required: 'Required',
        })}
       />
      </FormControl> */}
     </ModalBody>

     <ModalFooter>
      <Button
       bg={'white'}
       color={'green'}
       onClick={onClose}
       mr={3}
       variant='outline'
       fontWeight={'medium'}
       _hover={{
        bg: 'red',
        color: 'black',
       }}
      >
       Cancel
      </Button>
      <Button
       bg={'green'}
       color={'white'}
       fontWeight={'medium'}
       type='submit'
       _hover={{
        bg: 'white',
        color: 'green',
       }}
      >
       Create
      </Button>
     </ModalFooter>
    </ModalContent>
   </Modal>
  </>
 );
};

export default AddBrandModal;
