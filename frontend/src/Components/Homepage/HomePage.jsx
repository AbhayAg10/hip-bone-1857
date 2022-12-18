import { Box, Button, Container, Flex, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import JobButton from './JobButton'
import "swiper/css";
import "swiper/css/navigation";
import JobInterest from './JobInterest';
import Navbar from '../Navbar/Navbar';
import JobSlider from './JobSlider';
import FeatureCompony from './FeatureCompony';
import DiscoverJob from './DiscoverJob';
import JobOption from './JobOption';

const HomePage = () => {
  return (
    <Box>
        <Container
            mb={'28px'}
            h={'80px'}
            maxW={'100%'}
            // border={'1px'}
            // borderColor={'black'}
        >
            <Heading
                textAlign={'center'}
                fontWeight={'700'}
                fontSize={'35px'}
                lineHeight={'50px'}
                mb={'6px'}
                mt={'104px'}
            >Find your dream job now</Heading>
            <Text
                textAlign={'center'}
                fontWeight={'400'}
                fontSize={'17px'}
                lineHeight={'24px'}
                color={"#8292b4"}
            >5 lakh+ jobs for you to explore</Text>
        </Container>
        <Container
            h={'70px'}
            maxW={'100%'}
            // border={'1px'}
            // borderColor={'black'}
        >
            <Flex
                boxShadow='base' p='6' rounded='md' bg='white'
                w={'995px'}
                h={'100%'}
                m={'auto'}
                // border={'1px'}
                // borderColor={'blue'}
                borderRadius={'50px'}
                pl={'24px'}
                pr={'9px'}
                py={'9px'}
            >
                <Box
                    w={'28px'}
                    display={'flex'}
                    alignItems={'center'}
                >
                    <Image mr={'8px'} w={'20px'} h={'20px'} src='https://static.naukimg.com/s/7/103/i/search.9ec0e1ac.svg' />
                </Box>
                <Box
                    w={'340px'}
                    h={'100%'}
                    pr={'12px'}
                    py={'4px'}
                    pl={'4px'}
                >
                    <Input border={'none'} color={"#8292b4"} placeholder='Enter skills / designations / companies' />
                </Box>
                <Box
                    w={'223px'}
                    h={'100%'}
                    pr={'0px'}
                    pt={'4px'}
                    pl={'10px'}
                    pb={'6px'}
                >
                    <Select color={"#8292b4"} border={'none'} placeholder='Select experience'>
                        <option value='option1'>Fresher (less than 1 year)</option>
                        <option value='option2'>1 year</option>
                        <option value='option3'>2 years</option>
                        <option value='option3'>3 years</option>
                        <option value='option3'>4 years</option>
                        <option value='option3'>5 years</option>
                        <option value='option3'>6 years</option>
                        <option value='option3'>7 years</option>
                        <option value='option3'>8 years</option>
                        <option value='option3'>9 years</option>
                        <option value='option3'>10 years</option>
                        <option value='option3'>11 years</option>
                        <option value='option3'>12 years</option>
                        <option value='option3'>13 years</option>
                        <option value='option3'>14 years</option>
                        <option value='option3'>15 years</option>
                        <option value='option3'>16 years</option>
                        <option value='option3'>17 years</option>
                        <option value='option3'>18 years</option>
                        <option value='option3'>19 years</option>
                        <option value='option3'>20 years</option>
                        <option value='option3'>21 years</option>
                        <option value='option3'>22 years</option>
                        <option value='option3'>23 years</option>
                        <option value='option3'>24 years</option>
                        <option value='option3'>25 years</option>
                        <option value='option3'>26 years</option>
                        <option value='option3'>27 years</option>
                        <option value='option3'>28 years</option>
                        <option value='option3'>29 years</option>
                        <option value='option3'>30 years</option>
                    </Select>
                </Box>
                <Box
                    px= {'12px'}
                    py={'4px'}
                >
                    <Input border={'none'} placeholder='Enter location' />
                </Box>
                <Button
                    color={'white'}
                    fontWeight={'600'}
                    fontSize={'19px'}
                    bgColor={'#457eff'}
                    borderRadius={'50px'}
                    h={'48px'}
                    w={'120px'}
                    px={'28px'}
                    py={'11px'}
                >Search</Button>
            </Flex>
        </Container>
        <JobInterest />
        <JobButton />
        <JobSlider />
        <FeatureCompony />
        <DiscoverJob />
        <JobOption />
    </Box>
  )
}

export default HomePage