import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const ServicesNavbar = () => {
    return <Flex top='0' position='sticky' w='100%' h={['10vh', '10vh', '10vh', '10vh']} justifyContent='space-around' alignItems='center' bgColor='white'>
        <Flex>
            <Link to='/'>
                <Image alt='logo' src='https://static.naukimg.com/s/7/123/i/FF-Logo.8e75327b.png' w='8rem' />
            </Link>
        </Flex>

        <Flex color='gray.600' fontSize={['0.9rem', '0.9rem', '0.9rem', '0.9rem']} gap={['1.8rem', '1.8rem', '1.8rem', '1.8rem']}>
            <Link>
                <Text>RESUME WRITING</Text>
            </Link>
            <Link>
                <Text>RECRUITER ATTENTION</Text>
            </Link>
            <Link>
                <Text>FIND JOBS</Text>
            </Link>
            <Link>
                <Text>COMBO PACKS</Text>
            </Link>
            <Link>
                <Text>VALUE PLANS</Text>
            </Link>
            <Link>
                <Text>CONTACT US</Text>
            </Link>
        </Flex>

        <Flex gap={['1rem', '1rem', '1rem', '1rem']} alignItems='center'>
            <Flex>
                <Link>
                    <Image src='https://static.naukimg.com/s/7/123/i/cart.de6f3dff.png' />
                </Link>
            </Flex>
            <Flex>
                <Link>
                    <Text color='gray.500'>LOGIN</Text>
                </Link>
            </Flex>
            <Flex>
                <BiDotsVerticalRounded />
            </Flex>
        </Flex>
    </Flex>
}

export default ServicesNavbar;