import React from 'react';
import { Flex, Text, Stack, Image, Button, HStack, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import ServicesNavbar from './comps/ServicesNavbar';
import TopThreeBox from './comps/TopThreeBox';

const ServicesPage = () => {

    const texts1 = {
        txt1: 'RESUME DISPLAY',
        txt2: 'Increase your profile visibility to rectruiter upto 3 times.',
        txt3: 'Get featured profile, Stand out and get noticed in recruiter eyes.',
        txt4: '₹2047'
    }
    const texts2 = {
        txt1: 'PRIORITY APPLICANT',
        txt2: 'Be a priority applicant & increase your chance of getting a call.',
        txt3: 'Be the first one to apply and catch recruiter attention',
        txt4: '₹942'
    }
    const texts3 = {
        txt1: 'JOB SEARCH BOOSTER',
        txt2: 'Boost your job search with referrals',
        txt3: 'Take help from over 20000 seniors in top companies like TCS, HCL etc.',
        txt4: '₹839'
    }
    const texts4 = {
        txt1: 'JOBS FOR YOU',
        txt2: 'Send personalized message to recruiter',
        txt3: 'Search from a database of 1.6 lakh recruiters and share your Naukri profile',
        txt4: '₹839'
    }
    const texts5 = {
        txt1: 'RECRUITER CONNECTION',
        txt2: 'Stand out as an Early Applicant with instant access to jobs.',
        txt3: 'Our experts will understand your job preference & set alerts.',
        txt4: '₹1356'
    }
    const texts6 = {
        txt1: 'RESUME CRITIQUE',
        txt2: 'Get your resume reviewed and improve your job application',
        txt3: 'Our experts will analyze your resume and send a detailed report',
        txt4: '₹1017'
    }


    return <>
        <ServicesNavbar />

        <Flex direction='column'>
            <Flex w='100%' h={['5vh']} bgColor='gold' justifyContent='center' alignItems='flex-start'>
                <Text as='b'>Login for an exclusive discount!</Text></Flex>

            <Flex w='100%' direction='column' bgColor='blue.900' justifyContent='flex-start' alignItems='center'>
                <Flex w={['40rem']} direction='column' justifyContent='center' alignItems='center'>
                    <Text color='white' fontSize={['1.9rem']}>Move ahead in career, faster</Text>
                    <Text color='white' fontSize={['1.1rem']}>with our paid services</Text>
                </Flex>

                <Flex mt={['1rem', '1rem', '1rem', '1rem']} justifyContent='space-between' w={['63%']} h={['49vh']}>
                    <TopThreeBox img={'https://static.naukimg.com/s/7/123/i/resumeDisplay.c7a649c3.png'} texts={texts1} showBadge={true} />
                    <TopThreeBox img={'https://static.naukimg.com/s/7/123/i/priorityApp.4d581f13.png'} texts={texts2} showBadge={true} />
                    <TopThreeBox img={'https://static.naukimg.com/s/7/123/i/jsb-homepage.93423568.png'} texts={texts3} showBadge={true} />
                </Flex>
            </Flex>
        </Flex>

        <Flex w='100%' bgColor='blackAlpha.200'>
            <Stack border='1px solid black' w={['63%']} m='auto' h='100%' spacing={['1rem']}>

                <Flex mt={['1.3rem']} w='100%' h={['30vh']} gap={['1rem']} alignItems='center'>
                    <Flex w={['40vw']} bgColor='white' h='100%' gap={['1rem']}>
                        <Flex alignItems='flex-end'>
                            <Image h={['12rem']} w={['18rem']} src='https://static.naukimg.com/s/7/123/i/resumeWriting.1962981a.png' />
                        </Flex>
                        <Flex gap={['1rem']} p={['.8rem']} direction='column'>
                            <Text fontSize={['.9rem']}>RESUME WRITING</Text>
                            <Text as='b'>Standout from the crowd with our professionally written Resume by expert</Text>
                            <Text fontSize={['.9rem']}>Resume that highlights your strengths and showcase your experience</Text>
                            <Flex w='100%' justifyContent='space-between' alignItems='center'>
                                <Text as='b'>₹1653 Only</Text>
                                <Text color='blue' fontSize={['.8rem']}>KNOW MORE</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Flex bgColor='white' w={['30vw']} h={['100%']} direction='column'>
                        <Flex justifyContent='center' alignItems='center'>
                            <Image w={['5rem']} src='https://static.naukimg.com/s/7/123/i/resumeScore.033f8892.png' />
                        </Flex>
                        <Stack spacing={['.4rem']} p={['.4rem']}>
                            <Text fontSize={['.9rem']}>ONLINE RESUME MAKER</Text>
                            <Text>Create a job-winning resume with our simple resume maker</Text>
                            <Flex w='100%' justifyContent='space-between'>
                                <Text as='b'>₹211</Text>
                                <Text color='blue' fontSize={['.8rem']}>Create Resume</Text>
                            </Flex>
                        </Stack>
                    </Flex>
                </Flex>

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

                <Flex mt={['1rem', '1rem', '1rem', '1rem']} justifyContent='space-between' w={['100%']} h={['49vh']}>
                    <TopThreeBox img={'https://static.naukimg.com/s/7/123/i/jobs4u.22bb9e85.png'} texts={texts4} showBadge={false} />
                    <TopThreeBox img={'https://static.naukimg.com/s/7/123/i/recruiterConn.b993d2e1.png'} texts={texts5} showBadge={false} />
                    <TopThreeBox img={'https://static.naukimg.com/s/7/123/i/header-image.60ac1b14.png'} texts={texts6} showBadge={false} />
                </Flex>

                <Flex w='100%' h={['60vh']} justifyContent='space-between' alignItems='center' mt={['1rem', '1rem', '1rem', '1rem']}>
                    <Flex justifyContent='center' alignItems='center' w='49%' h='100%' backgroundImage='https://static.naukimg.com/s/7/123/i/contact-bg.5e06833d.jpg'>
                        <Stack spacing={['1.5rem']} color='white'>
                            <Text as='b'>Talk to Us</Text>
                            <Text>Call use Toll Free: 1800-102-5557</Text>
                            <Text>(9.00 AM to 9.00PM IST)</Text>
                            <Text>International Customer Call: +91-120-4021100</Text>
                            <Text>For bulk queries call: 1800103447</Text>
                        </Stack>
                    </Flex>

                    <Flex bgColor='white' w='49%' h='100%' justifyContent='space-between' alignItems='center' direction='column'>
                        <Text as='b' fontSize={['1.3rem']}>CONTACT US</Text>

                        <FormControl w={['80%']} m='auto' isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input borderRadius='none' placeholder='Type your name here' />
                            <FormLabel>Email ID</FormLabel>
                            <Input borderRadius='none' placeholder='Type your email ID' />
                            <FormLabel>Mobile</FormLabel>
                            <Input borderRadius='none' placeholder='Type your mobile number' />
                            <FormLabel>Write your query here</FormLabel>
                            <Textarea borderRadius='none' placeholder='e.g, I am interested' />
                        </FormControl>

                        <Button w={['80%']} color='white' bgColor='blue.400' borderRadius='none'>CALL ME BACK</Button>
                    </Flex>
                </Flex>

            </Stack>
        </Flex>

    </>
}

export default ServicesPage;