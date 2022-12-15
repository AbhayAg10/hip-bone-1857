import React from 'react'
import { Flex, Text, Badge, Link, Image } from '@chakra-ui/react';

const TopThreeBox = ({ img, texts, showBadge }) => {
    console.log(texts)
    return (
        <Flex boxShadow={'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'} bgColor='white' gap={['0.7rem']} direction='column' w={['20vw']}>
            <Flex justifyContent='flex-end' alignItems='center' >
                <Badge fontWeight='0' fontSize={['.7rem']} variant='solid' colorScheme='orange'>
                    {showBadge && 'MOST POPULAR'}
                </Badge>
            </Flex >
            <Flex justifyContent='center' alignItems='center'>
                <Image w={['15rem']} src={img} />
            </Flex>

            <Flex pl={['.4rem']} p={['.4rem']} direction='column' justifyContent='space-between' h={['38vh']}>
                <Text fontSize={['.8rem']}>{texts.txt1}</Text>
                <Text as='b'>{texts.txt2}</Text>
                <Text fontSize={['.9rem']}>{texts.txt3}</Text>
                <Flex direction='column'>
                    <Text fontSize={['.7rem']}>Subscription start from</Text>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Text as='b'>{texts.txt4}</Text>
                        <Link>
                            <Text color='blue' fontSize={['.8rem']}>KNOW MORE</Text>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}

export default TopThreeBox;