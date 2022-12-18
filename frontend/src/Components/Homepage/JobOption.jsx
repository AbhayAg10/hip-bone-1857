import { Box,Flex,Button, Text, Image,Container} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'

const JobOption = () => {
  return (
   <Box  width='80%' height='400px'  margin='auto' mt={100}> 
   <Flex >
   <Box  width='25%' height='400px' >
    <Button mt={15}>By Ambition Box</Button>
    <Text fontSize={30} fontWeight='bold'>Prepare for your next interview</Text>
    <Image src='https://static.naukimg.com/s/0/0/i/ab-interview.png' height={180}/>
   </Box>
   <Box border='1px solid RGBA(0, 0, 0, 0.06)' width='40%' height='400px' mr={5}>
    <Container fontSize={25} fontWeight='bold' > <Text >Interview Question By Compony</Text></Container>
   <Flex mb={10} ><Box border='1px solid RGBA(0, 0, 0, 0.06)' width='40%' height='80px' ml={7} p={4}>
        <Flex>
            <Image src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png' height='40px'/>
            <Box lineHeight={5}>
               <Flex> <Text fontSize='20px' fontWeight='bold'>TCS </Text> <ChevronRightIcon fontSize={20} /></Flex>
                <Text className='littlewhite' mb={-4}>1.6K+ Interview</Text>
            </Box>
        </Flex>
    </Box>
    <Box border='1px solid RGBA(0, 0, 0, 0.06)' width='40%' height='80px' ml={7} p={4}>
        <Flex >
            <Image src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png' height='40px'/>
            <Box lineHeight={5}>
               <Flex> <Text fontSize='20px' fontWeight='bold'>Byjus </Text> <ChevronRightIcon fontSize={20} /></Flex>
                <Text className='littlewhite' mb={-4}>1.6K+ Interview</Text>
            </Box>
        </Flex>
    </Box>
    </Flex>
    <Flex  mb={10} ><Box border='1px solid RGBA(0, 0, 0, 0.06)' width='40%' height='80px' ml={7} p={4}>
        <Flex>
            <Image src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png' height='40px'/>
            <Box lineHeight={5}>
               <Flex> <Text fontSize='20px' fontWeight='bold'>Amozen </Text> <ChevronRightIcon fontSize={20} /></Flex>
                <Text className='littlewhite' mb={-4}>1.6K+ Interview</Text>
            </Box>
        </Flex>
    </Box>
    <Box border='1px solid RGBA(0, 0, 0, 0.06)' width='40%' height='80px' ml={7} p={4}>
        <Flex>
            <Image src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png' height='40px'/>
            <Box lineHeight={5}>
               <Flex> <Text fontSize='20px' fontWeight='bold'>Accenture </Text> <ChevronRightIcon fontSize={20} /></Flex>
                <Text className='littlewhite' mb={-4}>1.6K+ Interview</Text>
            </Box>
        </Flex>
    </Box>
    </Flex>
    <Flex  mb={10}><Box border='1px solid RGBA(0, 0, 0, 0.06)' width='40%' height='80px' ml={7} p={4}>
        <Flex>
            <Image src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png' height='40px'/>
            <Box lineHeight={5}>
               <Flex> <Text fontSize='20px' fontWeight='bold'>Cognizant </Text> <ChevronRightIcon fontSize={20} /></Flex>
                <Text className='littlewhite' mb={-4}>1.6K+ Interview</Text>
            </Box>
        </Flex>
    </Box>
    <Box border='1px solid RGBA(0, 0, 0, 0.06)' width='40%' height='80px' ml={7} p={4}>
        <Flex>
            <Image src='https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png' height='40px'/>
            <Box lineHeight={5}>
               <Flex> <Text fontSize='20px' fontWeight='bold'>Flipcart</Text> <ChevronRightIcon fontSize={20} /></Flex>
                <Text className='littlewhite' mb={-4}>1.6K+ Interview</Text>
            </Box>
        </Flex>
    </Box>
    </Flex>
   </Box>
   <Box border='1px solid RGBA(0, 0, 0, 0.06)' width='30%' height='400px' mr={5}>
    <Text ml={3} fontSize={25} fontWeight='bold' mt={5}>Interview questions by role</Text>
    <Container textAlign='center' justifyContent='center'>
       <Flex ml={7} mt={10}><p >Software Engineer </p><span className='littlewhite'>(7.2K+ questions)</span></Flex> 
       <br/>
       <hr/>
       <Flex ml={7}><p >Business Analyst </p><span className='littlewhite'>(6.2K+ questions)</span></Flex> 
       <br/><hr/>
       <Flex ml={7}><p >Consultant  </p><span className='littlewhite'>(2.1K+ questions)</span></Flex> 
       <br/><hr/>
       <Flex ml={7}><p >Financial Analyst </p><span className='littlewhite'>(3K+ questions)</span></Flex> 
       <br/><hr/>
       <Flex ml={7}><p >Sales & Marketing </p><span className='littlewhite'>(1.1K+ questions)</span></Flex> 
       <br/><hr/>
       <Flex ml={7}><p >Quality Engineer  </p><span className='littlewhite'>(1.1K+ questions)</span></Flex> 
       <br/><hr/>
    </Container>
   </Box>
    </Flex>
    <hr className='littlewhite'/>
   </Box>
  )
}

export default JobOption