import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, SimpleGrid, Text, Heading, Divider } from '@chakra-ui/react'
import React from 'react'
import {useLoaderData} from 'react-router-dom'

export default function Dashboard() {
    const tasks = useLoaderData()
  return (
    <SimpleGrid columns='4' spacing={10} minChildWidth={300} >
     {tasks && tasks.map((task)=>{
      return(
        <Card key = {task.id} borderTop='8px' borderColor="green.400" bg='white'>
          <CardHeader>
            <Flex>
                <Box w = '50px' h = '50px'>
                  <Text>AV</Text>
              </Box>
              <Box>
                <Heading as='h3' size='sm'>{ task.title }</Heading>
                <Text fontStyle='italic'>by { task.author }</Text>
              </Box>
            </Flex>

          </CardHeader>
          <CardBody>

          <Text color='gray.500'>
            {task.description}
          </Text>

          </CardBody>
          <Divider borderColor='gray.300'/>
          <CardFooter>

          <HStack>
            <Button  leftIcon={<ViewIcon/>} colorScheme='whatsapp'>Watch</Button>
            <Button  leftIcon={<EditIcon/>}>Comment</Button>
          </HStack>
          </CardFooter>

        </Card>
      )
     })}
    </SimpleGrid>

  )

}

 export const tasksloader =  async ()=>{
  const res = await fetch(' http://localhost:3000/tasks')
  return res.json()
 }