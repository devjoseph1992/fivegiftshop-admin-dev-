import {
 Box,
 Flex,
 Avatar,
 HStack,
 Link,
 IconButton,
 Button,
 Menu,
 MenuButton,
 MenuList,
 MenuItem,
 useDisclosure,
 useColorModeValue,
 Stack,
 BreadcrumbItem,
 BreadcrumbLink,
 Breadcrumb,
 Heading,
} from '@chakra-ui/react';
import { MdMenu, MdClose } from 'react-icons/md';
import { useAuth } from '@/utils/auth';
import DarkModeSwitch from './DarkModeSwitch';
import AddBrandModal from '@/components/AddBrandModal';

// const Links = ['Dashboard', 'Projects', 'Team'];

export default function DashboardShell({ children }) {
 const { isOpen, onOpen, onClose } = useDisclosure();
 const { user, signout } = useAuth();

 return (
  <>
   <Box bg={useColorModeValue('white', 'gray.900')} px={4} h='100vh'>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
     <IconButton
      size={'md'}
      icon={isOpen ? <MdClose /> : <MdMenu />}
      aria-label={'Open Menu'}
      display={{ md: !isOpen ? 'none' : 'inherit' }}
      onClick={isOpen ? onClose : onOpen}
     />
     <HStack spacing={8} alignItems={'center'}>
      <Box>FiveGiftShop</Box>
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
       <Link
        _hover={{
         textDecoration: 'none',
         bg: useColorModeValue('gray.200', 'gray.700'),
        }}
       >
        Dashboard
       </Link>
      </HStack>
     </HStack>
     <Flex alignItems={'center'} mr={4}>
      <Menu>
       <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
       >
        <Avatar size='sm' src={user?.photoUrl} />
       </MenuButton>
       <MenuList>
        <MenuItem as='button' onClick={() => signout()}>
         Logout
        </MenuItem>
       </MenuList>
      </Menu>
      <DarkModeSwitch />
     </Flex>
    </Flex>
    <Flex margin='0 auto' direction='column' maxW='1250px' px={8}>
     <Breadcrumb>
      <BreadcrumbItem>
       <BreadcrumbLink>Brands</BreadcrumbLink>
      </BreadcrumbItem>
     </Breadcrumb>
     <Flex justifyContent='space-between'>
      <Heading mb={8}>My Product</Heading>
      <AddBrandModal>+ Add Brand</AddBrandModal>
     </Flex>
     {children}
    </Flex>

    {isOpen ? (
     <Box pb={4}>
      <Stack as={'nav'} spacing={4}>
       <Link
        px={2}
        py={1}
        _hover={{
         textDecoration: 'none',
         bg: useColorModeValue('gray.200', 'gray.700'),
        }}
       >
        Dashboard
       </Link>
      </Stack>
     </Box>
    ) : null}
   </Box>
  </>
 );
}
