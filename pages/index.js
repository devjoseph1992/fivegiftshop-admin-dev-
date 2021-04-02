import { useAuth } from '@/utils/auth';
import Head from 'next/head';

// styles
import {
 Flex,
 Box,
 FormControl,
 FormLabel,
 Input,
 Checkbox,
 Stack,
 Link,
 Button,
 Heading,
 Text,
 useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaPowerOff } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import DarkModeSwitch from '@/components/DarkModeSwitch';

const Home = () => {
 const auth = useAuth();
 return (
  <>
   <Head>
    <title>Fivegiftshop \ admin</title>
   </Head>
   <main>
    <Flex
     minH={'100vh'}
     align={'center'}
     justify={'center'}
     bg={useColorModeValue('gray.50', 'gray.800')}
    >
     <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
       <Heading fontSize={'4xl'}>Welcome Admin</Heading>
       <Text fontSize={'lg'} color={'gray.600'}>
        Fivegiftshop <Link color={'blue.400'}>facebook</Link> ✌️
        <DarkModeSwitch />
       </Text>
      </Stack>
      <Box
       rounded={'lg'}
       bg={useColorModeValue('white', 'gray.700')}
       boxShadow={'lg'}
       p={8}
      >
       <Stack spacing={4}>
        <FormControl id='email'>
         <FormLabel>Email address</FormLabel>
         <Input type='email' />
        </FormControl>
        <FormControl id='password'>
         <FormLabel>Password</FormLabel>
         <Input type='password' />
        </FormControl>
        <Stack spacing={10}>
         <Stack
          direction={{ base: 'column', sm: 'row' }}
          align={'start'}
          justify={'space-between'}
         >
          <Checkbox>Remember me</Checkbox>
          <Link color={'blue.400'}>Forgot password?</Link>
         </Stack>
         <Button
          bg={useColorModeValue('blue.400', 'white')}
          color={useColorModeValue('white', 'black')}
          _hover={{
           bg: 'blue.500',
          }}
         >
          Sign in
         </Button>
         {auth.user ? (
          <Button
           as='a'
           href='/dashboard'
           bg={'green'}
           color={'white'}
           leftIcon={<MdDashboard />}
           variant={'outline'}
           _hover={{
            bg: 'white',
            color: 'green',
           }}
          >
           Dashboard
          </Button>
         ) : (
          <Button
           onClick={(e) => auth.signinWithGitHub()}
           bg={'black'}
           color={'white'}
           leftIcon={<FaGithub />}
           variant={'outline'}
           _hover={{
            bg: 'white',
            color: 'black',
           }}
          >
           Sign in with Github
          </Button>
         )}
        </Stack>
       </Stack>
      </Box>
     </Stack>
    </Flex>
   </main>
  </>
 );
};

export default Home;
