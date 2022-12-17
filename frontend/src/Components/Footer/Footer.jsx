import { Box, Center, Container, Divider, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import mainlogo from '../../Components/req/jobpandacom-logo.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode } from "swiper";

const Footer = () => {
  return (
    <>
      <Divider orientation={"horizontal"} w={"100%"} borderColor={"gray.300"} />
      <Container
        h={"425px"}
        pt={"80px"}
        pb={"60px"}
        maxW={"100%"}
        // border={"1px"}
        // borderColor={"black"}
      >
        <Flex
          h={"160px"}
          px={"148px"}
          maxW={"100%"}
          // border={"1px"}
          // borderColor={"black"}
        >
          <Flex
            direction={"row"}
          >
            <Flex
              direction={"column"}
              pr={"17px"}
              w={"180px"}
              h={'100%'}
              // border={"1px"}
              // borderColor={"blue"} 
            >
              <Box
                maxH={"70px"}
                w={"100%"}
                // border={"1px"}
                // borderColor={"blue"} 
              >
                <Image cursor={'pointer'} maxH={"100%"} src={mainlogo} />
              </Box>
              <Text
                mt={'20px'}
                textAlign={'start'}
                color={"#8292b4"}
                fontSize={"16px"}
                fontWeight={"400"}
              >Connect with us</Text>
              <Flex
                h={"25px"}
                w={'80%'}
                // border={"1px"}
                // borderColor={"blue"}
                mb={"20px"}
                mt={'5px'}
              >
                <Image cursor={'pointer'} mr={'16px'} src='https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg' />
                <Image cursor={'pointer'} mr={'16px'} src='https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg' />
                <Image cursor={'pointer'} mr={'16px'} src='https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg' />
                <Image cursor={'pointer'} src='https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg' />
              </Flex>
            </Flex>
            <Flex
              direction={"column"}
              pl={"30px"}
              w={"180px"}
              h={'100%'}
              // border={"1px"}
              // borderColor={"blue"} 
            >
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >About us</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Careers</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Employer home</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Sitemap</Text>
            </Flex>
            <Flex
              direction={"column"}
              pl={"30px"}
              w={"180px"}
              h={'100%'}
              // border={"1px"}
              // borderColor={"blue"} 
            >
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Help center</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Summons/Notices</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Grievances</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Report issue</Text>
            </Flex>
            <Flex
              direction={"column"}
              pl={"30px"}
              w={"180px"}
              h={'100%'}
              // border={"1px"}
              // borderColor={"blue"} 
            >
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Privacy policy</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Terms & conditions</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Fraud alert</Text>
              <Text
                textAlign={'start'}
                pb={'12px'}
                color={'#445578'}
                fontSize={'16px'}
                fontWeight={'400'}
                lineHeight={'20px'}
                cursor={'pointer'}
                _hover={{
                  color : "#457eff"
                }}
              >Trust & safety</Text>
            </Flex>
            <Flex
              direction={'column'}
              ml={'80px'}
              h={"100%"}
              w={'362px'}
              p={"24px"}
              borderRadius={'8px'}
              border={"1px"}
              borderColor={"gray.300"}
            >
              <Text
                textAlign={'start'}
                fontWeight={'700'}
                lineHeight={"23px"}
                fontSize={'16px'}
              >Apply on the go</Text>
              <Text
                textAlign={'start'}
                fontWeight={'400'}
                lineHeight={"20px"}
                fontSize={'13px'}
                color={'#445578'}
              >Get real-time job updates on our App</Text>
              <Flex
                pt={'16px'}
                direction={'row'}
                h={'65px'}
                // border={"1px"}
                // borderColor={"red"}
              >
                <Image cursor={'pointer'} src='https://static.naukimg.com/s/0/0/i/new-homepage/android-app.png' />
                <Image cursor={'pointer'} ml={'10px'} src='https://static.naukimg.com/s/0/0/i/new-homepage/ios-app.png' />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Divider mx={"auto"} mt={"48px"} mb={"35px"} orientation={"horizontal"} w={"100%"} borderColor={"gray.200"} />
        <Flex
          h={"45px"}
          px={"148px"}
          maxW={"100%"}
          // border={"1px"}
          // borderColor={"black"}
        >
          <Flex
            mr={'30px'}
            w={'480px'}
            h={'100%'}
            // border={'1px'}
            // borderColour={'red'}
          >
            <Image cursor={'pointer'} maxH={'60%'} src={'https://static.naukimg.com/s/0/0/i/new-homepage/infoedge-logo.svg'} />
            <Box
              h={'100%'}
              ml={'32px'}
            >
              <Text 
                fontWeight={'400'}
                color={'#8292b4'} 
                textAlign={'start'}
                fontSize={'13px'}  
              >All trademarks are the property of their respective owners</Text>
              <Text
                fontWeight={'400'}
                color={'#8292b4'} 
                textAlign={'start'}
                fontSize={'13px'}
              >All rights reserved © 2022 Info Edge (India) Ltd.</Text>
            </Box>
          </Flex>
          <Box
            w={'120px'}
            h={'100%'}
            p={'12px'}
            // border={'1px'}
            // borderColour={'green'}
          >
            <Text
              fontWeight={'500'}
              color={'gray.500'} 
              textAlign={'start'}
              fontSize={'13px'}
            >Our businesses</Text>
          </Box>
          <Box
            w={'534px'}
            h={'100%'}
            cursor={'pointer'}
            // border={'1px'}
            // borderColour={'green'}
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              freeMode={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/nnacres.png' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jeevansathi.png' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/ng.png' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/firstNaukri.png' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/shiksha.png' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/iimjobs.png' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/hirist.png' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/jobhai.png' />
              </SwiperSlide>
              <SwiperSlide>
                <Image src='https://static.naukimg.com/s/0/0/i/new-homepage/footer-logos/techminis.png' />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Footer