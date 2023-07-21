import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (

    <Flex as='nav' p = '10px' alignItems='center'>
        <Heading as='h1'>Dojo Task</Heading> 
        <Spacer />
        <HStack spacing='20px'>

        <Box bg='gray.400' p='10px'>
            M
        </Box>
        <Text>plohani@gmail.com</Text>
        <Button colorScheme='whatsapp'>Logout</Button>
        </HStack>

    </Flex>
    
    // <Flex bg="gray.400" justifyContent="space-around" wrap="wrap" gap='2'>
    //     <Box width="200px" height="150px" bg="red.500">1</Box>
    //     <Box width="200px" height="150px" bg="blue.500">2</Box>
    //     <Box width="200px" height="150px" flexGrow='1' bg="green.500">3</Box>
    //     <Box width="200px" height="150px" flexGrow='2' bg="purple.500">4</Box>

    // </Flex>
  )
}

export default Navbar