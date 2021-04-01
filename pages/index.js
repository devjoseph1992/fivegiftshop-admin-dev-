import { useAuth } from '@/utils/auth';

// styles
import { Button, Center, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
 const auth = useAuth();
 return (
  <>
   <div>{auth?.user?.email}</div>
   <Center p={8}>
    <Button
     onClick={(e) => auth.signinWithGitHub()}
     w={'full'}
     maxW={'md'}
     variant={'outline'}
     leftIcon={<FaGithub />}
    >
     <Center>
      <Text>Sign in with Github</Text>
     </Center>
    </Button>
    {auth?.user && (
     <Button
      onClick={(e) => auth.signout()}
      w={'full'}
      maxW={'md'}
      variant={'outline'}
     >
      <Center>
       <Text>Logout</Text>
      </Center>
     </Button>
    )}
   </Center>
  </>
 );
};

export default Home;
