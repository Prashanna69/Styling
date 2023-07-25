import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { Form } from 'react-router-dom'

export default function Create ()
{
  return (
    <Box maxW='480px'>
      <Form>
        <FormControl isRequired mb='40px'>
          <FormLabel>
            Task name:
          </FormLabel>
          <Input type='text' name='title'  />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>
            Task Description:
          </FormLabel>
          <Textarea
            placeholder='Enter Detailed description of the task.'
            name='Description'
          />
        </FormControl>
        <FormControl display='flex' alignItems='center' mt='20px'>
          <Checkbox
            name='isPriority'
            size='lg'
          />
          <FormLabel mb='0' ml='10px'>Make this a priority task.</FormLabel>
        </FormControl>
        <Button mt='20px' colorScheme='whatsapp'>Submit</Button>
      </Form>
    </Box>
  )
}

function createAction ()
{

}