import React from 'react'
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const JobInterest = () => {
  return (
    <>
        <Container
            h={'356px'}
            maxW={'75%'}
            m={'auto'}
            // border={'1px'}
            // borderColor={'black'}
            pt={'32px'}
            pb={'12px'}
        >
            <Heading
                textAlign={'center'}
                fontWeight={'700'}
                fontSize={'27px'}
                lineHeight={'40px'}
                mb={'6px'}
            >Jobs you may be interested in</Heading>
            <Box
                h={'272px'}
                maxW={'100%'}
                py={'20px'}
                // border={'1px'}
                // borderColor={'blue'}
            >
                <Swiper
                    slidesPerView={4}
                    // spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Box
                            cursor={'pointer'}
                            display={'flex'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://www.naukri.com/hotjobs/images/v3/kpr_mar20.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Field Engineer</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >KPR India Llp</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >5.0</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Permanent Remote</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-1 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            cursor={'pointer'}
                            display={'flex'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://img.naukimg.com/logo_images/groups/v1/4662765.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Purchase Executive</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >Merlinhawk Aerospace</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >4.2</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Bangalore</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-1 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            cursor={'pointer'}
                            display={'flex'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://img.naukimg.com/logo_images/groups/v1/1103904.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Design Engineer</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >UNO MINDA</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >4.1</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Delhi/NCR</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-2 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            cursor={'pointer'}
                            display={'flex'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://img.naukimg.com/logo_images/groups/v1/4619905.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Electrical Engineer</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >Premas Biotech</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >3.3</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Manesar</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-0 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            cursor={'pointer'}
                            display={'flex'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://img.naukimg.com/logo_images/groups/v1/4593491.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Trainee RA / Jr.RA / RA</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >Embio Limited</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >3.6</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Mahad,Raigad</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-3 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            display={'flex'}
                            cursor={'pointer'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://img.naukimg.com/logo_images/groups/v1/4613633.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Diploma Electrical Engineer</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >NR Switch</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >3.9</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Kota</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-2 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            display={'flex'}
                            cursor={'pointer'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://img.naukimg.com/logo_images/groups/v1/4600263.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Purchase Officer</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >Hetero Healthcare</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >3.8</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Hyderabad</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-2 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            display={'flex'}
                            cursor={'pointer'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://img.naukimg.com/logo_images/groups/v1/4604671.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Diploma Engineer Trainee</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >JSK Industries</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >3.6</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Dadra & Nagar</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-2 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box
                            display={'flex'}
                            cursor={'pointer'}
                            flexDirection={'column'}
                            w={'265px'}
                            h={'232px'}
                            border={'1px'}
                            borderColor={'gray.100'}
                            _hover={{
                                background: "white",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                            }}
                            borderRadius={'15px'}
                            pl={'24px'}
                            pr={'20px'}
                            py={'20px'}
                            mr={'16px'}
                        >
                            <Box
                                w={'100%'}
                                h={'72px'}
                                // border={'1px'}
                                // borderColor={'blue'}
                                pr={'145px'}
                            >
                                <Image src='https://img.naukimg.com/logo_images/groups/v1/4883045.gif' />
                            </Box>
                            <Text
                                pt={'10px'}
                                fontWeight={'600'}
                                fontSize={'17px'}
                                lineHeight={'23px'}
                            >Maintenance Engineer</Text>
                            <Flex
                            direction={'row'}
                            pt={'4px'}
                            h={'18px'}
                            w={'100%'}
                            // border={'1px'}
                            // borderColor={'green'}
                            >
                                <Text
                                    fontSize={'15px'}
                                    pr={'7px'}
                                    lineHeight={'18px'}
                                >Sofcon</Text>
                                <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                                <Text
                                    fontSize={'15px'}
                                    lineHeight={'18px'}
                                >4.0</Text>
                            </Flex>
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                flexDirection={'row'}
                                mt={'48px'}
                                h={'18px'}
                                w={'100%'}
                                // border={'1px'}
                                // borderColor={'green'}
                            >
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >Bhavnagar</Text>
                                <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                                <Text
                                    mr={'4px'}
                                    color={'#445578'}
                                    fontSize={'13px'}
                                    fontWeight={'400'}
                                    lineHeight={'18px'}
                                >0-2 Yrs</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Container>
    </>
  )
}

export default JobInterest