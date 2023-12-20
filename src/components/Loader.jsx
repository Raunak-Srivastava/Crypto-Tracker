import React from 'react'
import {Box , Spinner , VStack} from '@chakra-ui/react'

const Loader = () => {
  return (
    <VStack w={"full"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Box transform={"scale(3"}>
      <Spinner size={"xl"} />
      </Box>
      
    </VStack>
  )
}

export default Loader