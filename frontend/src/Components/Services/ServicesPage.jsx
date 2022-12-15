import React from 'react';
import { Flex, Text, Link, Image } from '@chakra-ui/react';
import ServicesNavbar from './ServicesNavbar';

const ServicesPage = () => {
    return <>
        <ServicesNavbar />

        <Flex direction='column'>
            <Flex w='100%' h={['6vh', '6vh', '6vh', '6vh']} bgColor='gold' justifyContent='center' alignItems='flex-start'>
                <Text as='b'>Login for an exclusive discount!</Text></Flex>

            <Flex w='100%' h={['17vh', '17vh', '17vh', '38vh']} bgColor='blue.900' justifyContent='center' alignItems='flex-start'>
                <Flex w={['40rem']} direction='column' justifyContent='center' alignItems='center'>
                    <Text color='white' fontSize={['1.9rem']}>Move ahead in career, faster</Text>
                    <Text color='white' fontSize={['1.1rem']}>with our paid services</Text>
                </Flex>
            </Flex>

        </Flex>

    </>
}

export default ServicesPage