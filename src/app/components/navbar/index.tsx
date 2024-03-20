import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar:React.FC = () => {
  return (
    <Flex justifyContent="space-between">
      <Text color="white" fontWeight={600} fontSize="20px" p="20px" fontFamily="poppins">Monitoring Asset KDO</Text>
      <Button>Logout</Button>
    </Flex>
  )
}

export default Navbar