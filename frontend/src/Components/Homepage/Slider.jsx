import { Box, Text,Flex } from '@chakra-ui/react'
import React from 'react'

const Slider = () => {
  return (
    <Box border='1px solid RGBA(0, 0, 0, 0.24)' height='450px' width='600px' pt={14} borderRadius='10px' bg='white'>
          <Flex justifyContent='space-around' mb={10}> <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px'
          _hover={{
            
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
          >
                <Text> Full Stack Developer</Text>  
                <Text>23.9K+ jobs</Text>
             </Box>
             <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px'
              _hover={{
            
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}>
                <Text> Full Stack Developer</Text>  
                <Text>23.9K+ jobs</Text>
             </Box>
           </Flex> 
           <Flex justifyContent='space-around' mb={10}> <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%'
           _hover={{
            
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }} p={4} borderRadius='10px'>
                <Text> Full Stack Developer</Text>  
                <Text>23.9K+ jobs</Text>
             </Box>
             <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px' 
             _hover={{
            
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}>
                <Text> Full Stack Developer</Text>  
                <Text>23.9K+ jobs</Text>
             </Box>
           </Flex> 
           <Flex justifyContent='space-around' mb={10}> <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px' 
           _hover={{
            
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}>
                <Text> Full Stack Developer</Text>  
                <Text>23.9K+ jobs</Text>
             </Box>
             <Box border='1px solid RGBA(0, 0, 0, 0.08)' width='40%' p={4} borderRadius='10px' 
             _hover={{
            
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}>
                <Text> Full Stack Developer</Text>  
                <Text>23.9K+ jobs</Text>
             </Box>
           </Flex> 
    </Box>
  )
}

export default Slider