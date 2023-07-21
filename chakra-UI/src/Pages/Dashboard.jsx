import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Dashboard = () => {
  
  return (
    <SimpleGrid columns='4' spacing={10} minChildWidth={250} p={12}>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'>
        <Text color={{base: 'pink', md: 'blue' , lg : 'green' }}>Hello</Text>
      </Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>

      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
       
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
      <Box bg='whiteAlpha.400' height='200px' border='1px solid'></Box>
    </SimpleGrid>
  
  )
 
}

export default Dashboard