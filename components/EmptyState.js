import { Heading, Flex, Text } from '@chakra-ui/react';

import DashboardShell from './DashboardShell';
import AddBrandModal from './AddBrandModal';

const EmptyState = () => (
 <Flex
  width='100%'
  backgroundColor='white'
  borderRadius='8px'
  p={16}
  justify='center'
  align='center'
  direction='column'
 >
  <Heading size='lg' mb={2}>
   You haven’t added any products.
  </Heading>
  <Text mb={4}>Let’s get started.</Text>
  <AddBrandModal>Add Your First Product</AddBrandModal>
 </Flex>
);

export default EmptyState;
