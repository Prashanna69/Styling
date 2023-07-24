import { Tab, TabList,  TabPanel,  TabPanels, Tabs } from '@chakra-ui/react'

export default function Profile(){
  return (
    <>

      <Tabs mt='40px' p='20px' colorScheme='blackAlpha' variant='enclosed'>
       <TabList>
         <Tab _selected={{color:'White', bg: 'purple.400'}}>Account Info</Tab>
         <Tab _selected={{color:'White', bg: 'purple.400'}}>Account Info</Tab>


        </TabList>
        <TabPanels>

        </TabPanels>

     </Tabs>
    </>
  )
}