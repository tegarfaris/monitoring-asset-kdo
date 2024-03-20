import { Flex } from '@chakra-ui/react'
import React from 'react'

const AuthLayout:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" bg="black">
      {children}
    </Flex>
  )
}

export default AuthLayout