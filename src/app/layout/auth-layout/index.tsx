import { Flex } from '@chakra-ui/react'
import React from 'react'

const AuthLayout:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Flex minH="100vh" justifyContent="center" alignItems="center" bgImage="/alun-alun.jpg" bgPos="center" bgSize="cover">
      {children}
    </Flex>
  )
}

export default AuthLayout