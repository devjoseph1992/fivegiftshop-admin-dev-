import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

export const Th = (props) => (
 <Text
  as='th'
  textTransform='uppercase'
  fontSize='xs'
  fontWeight='medium'
  px={4}
  {...props}
  color={useColorModeValue('gray.900', 'white')}
  bg={useColorModeValue('white', 'gray.900')}
 />
);

export const Td = (props) => (
 <Box
  as='td'
  p={4}
  borderBottom='1px solid'
  borderBottomColor='gray.100'
  textTransform='uppercase'
  {...props}
  color={useColorModeValue('gray.900', 'white')}
  bg={useColorModeValue('white', 'gray.900')}
 />
);

export const Tr = (props) => (
 <Box
  as='tr'
  borderTopLeftRadius={8}
  borderTopRightRadius={8}
  borderBottom='1px solid'
  borderBottomColor='gray.200'
  height='40px'
  {...props}
  color={useColorModeValue('gray.900', 'white')}
  bg={useColorModeValue('white', 'gray.900')}
 />
);

export const Table = (props) => {
 return (
  <Box
   as='table'
   textAlign='left'
   ml={0}
   mr={0}
   borderRadius={8}
   boxShadow='0px 4px 10px rgba(0, 0, 0, 0.05)'
   {...props}
   color={useColorModeValue('gray.900', 'white')}
   bg={useColorModeValue('white', 'gray.900')}
  />
 );
};
