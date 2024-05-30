import { Avatar, Divider, Flex, Text } from '@chakra-ui/react'
import { getCookie } from 'cookies-next';
import React from 'react'
import { IAuthUser } from '../../interface/auth.interface';
import { capitalize } from 'lodash';

const Profile = () => {
    const dataCookies = getCookie("dataRegister");
    const [data, setData] = React.useState<IAuthUser>();
  
    React.useEffect(() => {
      if (dataCookies) {
        const dataLogin: IAuthUser = JSON.parse(dataCookies);
        setData(dataLogin as IAuthUser);
      } else {
        console.error("Cookie 'dataRegister' tidak ditemukan.");
      }
    }, [dataCookies]);
  return (
    <Flex flexDir="column" bg="white" p="40px" rounded="20px" gap="20px">
        <Text fontSize="24px" fontWeight={600}>Profile</Text>
        <Divider />

        <Flex gap="20px" alignItems="center">
        <Avatar name={data?.username} w="60px" h="60px" />
        
        <Flex flexDir="column" gap="10px">
            <Text fontSize="24px" fontWeight={600} fontFamily="Poppins">{capitalize(data?.username)}</Text>
            <Text>0898989898</Text>
            <Text>NIP: 098098098098</Text>
        </Flex>
        </Flex>
    </Flex>
  )
}

export default Profile