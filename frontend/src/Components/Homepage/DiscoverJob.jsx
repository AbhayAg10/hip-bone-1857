import { Container,Box,Image,Text, Flex} from '@chakra-ui/react'
import React from 'react'
import Slider from './Slider'

const DiscoverJob = () => {
  return (
   
      <Box width='80%' bg='red.50' height='400px' margin='auto' mt={20}>
        <Flex>
        <Box width='40%' pl={85}  pt={20} height='100%'>
          <Image src='https://static.naukimg.com/s/0/0/i/role-collection.png' height={100}/>
          <Text fontSize={30} fontWeight='bold'>Discover jobs across popular roles</Text>
          <Text className='littlewhite' fontSize={20}>Select a role and we'll show you relevant jobs for it!</Text>
        </Box>
        <Box mt={-5} >
          <Slider />
        </Box>
        </Flex>
        
      </Box>

  )
}

export default DiscoverJob