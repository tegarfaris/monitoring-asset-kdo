import { Flex, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import Navbar from '../../components/navbar'

const DashboardLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <Flex flexDir="column" px="150px" bg="black">
      <Navbar />
      <Text color="white" fontWeight={600}>asdasd</Text>
    </Flex>
  )
}

export default DashboardLayout