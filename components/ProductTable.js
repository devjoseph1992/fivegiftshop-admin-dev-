import React from 'react';
import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import { parseISO, format } from 'date-fns';

const ProductTable = ({ brands }) => {
 return (
  <Table>
   <thead>
    <Tr>
     <Th>Brand</Th>
     {/* <Th>Site Link</Th> */}
     <Th>Product</Th>
     <Th>Date Added</Th>
     {/* <Th>{''}</Th> */}
    </Tr>
   </thead>
   <tbody>
    {brands.map((brand) => (
     <Box as='tr' key={brand.id}>
      <Td fontWeight='medium'>{brand.name}</Td>
      <>
       {/* <Link>View Feedback</Link> */}
       <Td>Products</Td>
      </>
      <Td>{format(parseISO(brand.createdAt), 'PPpp')}</Td>
     </Box>
    ))}
   </tbody>
  </Table>
 );
};

export default ProductTable;
