import React from 'react'
import { Flex, Text, Stack, Image, Button, HStack, SimpleGrid, FormControl, FormLabel, Input, Textarea, Spacer } from '@chakra-ui/react';


const Services2 = () => {
    return
    <Flex bgColor='white' mt={['1.3rem']} w='100%' h={['30vh']} gap={['1rem']} alignItems='center'>
        <Flex w={['24vw']} h='100%' justifyContent='center' alignItems='flex-end'>
            <Image w={['14rem']} src='https://static.naukimg.com/s/7/123/i/subscriptionWidget.d8278767.png' />
        </Flex>

        <Flex direction='column' gap={['.5rem']}>
            <Text fontSize={['1.9rem']}>Subscribe to our Monthly Job Search Plan</Text>
            <Text fontSize='.9rem'>KEY BENEFITS</Text>
            <Flex w='100%' justifyContent='space-between'></Flex>
            <Stack spacing={['.3rem']}>
                <Text as='b'>Rank higher in Recruiter Searches</Text>
                <Text as='b'>Priority Access to Jobs</Text>
                <Text as='b'>Send message to Recruiter anytime</Text>
            </Stack>

            <HStack justifyContent='space-between'>
                <Stack spacing={['.0rem']}>
                    <Text fontSize={['.7rem']} color='grey'>Subscription starts from</Text>
                    <Text as='b'>₹859</Text>
                </Stack>
                <Button fontSize={['.9rem']} color='blue' bgColor='white' fontWeight='none' borderRadius='none' border='1px solid blue'>
                    KNOW MORE
                </Button>
            </HStack>
        </Flex>
    </Flex>
}

export default Services2