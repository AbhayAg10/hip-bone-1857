import { Box, Container, Flex, Text,
    Image,
    Heading,
    Button
    } from '@chakra-ui/react'
    import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'

import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css'


const FeatureCompony = () => {
  return (
    <div>
      <Heading mt={10} mb={10} textAlign='center'>Featured companies actively hiring</Heading>
      <Box className='container py-4 px-4 justify-conten-center '>
        <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className='mySwiper'
            slidesPerView={5}
            spaceBetween={30}
            breakpoints={{
                0:{
                    slidesPerView:1,
                    spaceBetween:10,
                },
                480:{
                    slidesPerView:2,
                    spaceBetween:10,
                },
                768:{
                    slidesPerView:3,
                    spaceBetween:10,
                },
                1024:{
                    slidesPerView:4,
                    spaceBetween:10,
                },
                1280:{
                    slidesPerView:4,
                    spaceBetween:10,
                }
            }}
        >
            <SwiperSlide>
               
                <div>
             <Box  
   
                w={250}
                h={320}
                border='1px solid RGBA(0, 0, 0, 0.06)'
                justifyContent='center'
                textAlign='center'
                alignItems='center'
                ml={30}

                >
                    <Container margin='auto'  justifyContent='center' >
                    <Image src='https://img.naukimg.com/logo_images/groups/v2/13832.gif ' ml={12} mt={3}  height={38}/>
                    </Container>
                    <Container width='80%'   padding={5} mt={5} bg='green.50' borderRadius='15%'>
                        <Text fontSize={20} fontWeight='bold' >Infosys </Text>
                        <Text><StarIcon height={4} mt={-1} color='orange.400'/> 3.9 | 27.4K+ reviews</Text>
                    </Container>
                    <Container mt={3}>
                        <Text lineHeight={5}>global leader in next-gen digital services</Text>
                        <Button mt={3} borderRadius='25%' color='teal' >View Jobs</Button>
                    </Container>

                </Box>
                </div>
            </SwiperSlide>
            <SwiperSlide>
               
               <div>
            <Box  
  
               w={250}
               h={320}
               border='1px solid RGBA(0, 0, 0, 0.06)'
               justifyContent='center'
               textAlign='center'
               alignItems='center'
               ml={30}

               >
                   <Container margin='auto'  justifyContent='center' >
                   <Image src='https://img.naukimg.com/logo_images/groups/v2/1527726.gif' ml={12} mt={3}  height={38}/>
                   </Container>
                   <Container width='80%'   padding={5} mt={5} bg='green.50' borderRadius='15%'>
                       <Text fontSize={20} fontWeight='bold' >incedo </Text>
                       <Text><StarIcon height={4} mt={-1} color='orange.400'/> 4.0| 400 reviews</Text>
                   </Container>
                   <Container mt={3}>
                       <Text lineHeight={5}>US-based consulting & technology services firm.</Text>
                       <Button mt={3} borderRadius='25%' color='teal' >View Jobs</Button>
                   </Container>

               </Box>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               
               <div>
            <Box  
  
               w={250}
               h={320}
               border='1px solid RGBA(0, 0, 0, 0.06)'
               justifyContent='center'
               textAlign='center'
               alignItems='center'
               ml={30}

               >
                   <Container margin='auto'  justifyContent='center' >
                   <Image src='https://img.naukimg.com/logo_images/groups/v2/44512.gif ' ml={12} mt={3}  height={38}/>
                   </Container>
                   <Container width='80%'   padding={5} mt={5} bg='green.50' borderRadius='15%'>
                       <Text fontSize={20} fontWeight='bold' >ICIC Bank </Text>
                       <Text><StarIcon height={4} mt={-1} color='orange.400'/> 4.0|34.1K+  reviews</Text>
                   </Container>
                   <Container mt={3}>
                       <Text lineHeight={5}>Leading Private sector bank in India</Text>
                       <Button mt={3} borderRadius='25%' color='teal' >View Jobs</Button>
                   </Container>

               </Box>
               </div>
           </SwiperSlide>
           <SwiperSlide>
               
               <div>
            <Box  
  
               w={250}
               h={320}
               border='1px solid RGBA(0, 0, 0, 0.06)'
               justifyContent='center'
               textAlign='center'
               alignItems='center'
               ml={30}

               >
                   <Container margin='auto'  justifyContent='center' >
                   <Image src='https://img.naukimg.com/logo_images/groups/v2/240936.gif ' ml={12} mt={3}  height={38}/>
                   </Container>
                   <Container width='80%'   padding={5} mt={5} bg='green.50' borderRadius='15%'>
                       <Text fontSize={20} fontWeight='bold' >JPMorgan Chase Bank </Text>
                       <Text><StarIcon height={4} mt={-1} color='orange.400'/>4.2| 3.5K+ reviews  reviews</Text>
                   </Container>
                   <Container mt={3}>
                       <Text lineHeight={5}>Leader in financial services </Text>
                       <Button mt={3} borderRadius='25%' color='teal' >View Jobs</Button>
                   </Container>

               </Box>
               </div>
           </SwiperSlide>
           <SwiperSlide>
              
              <div>
           <Box  
 
              w={250}
              h={320}
              border='1px solid RGBA(0, 0, 0, 0.06)'
              justifyContent='center'
              textAlign='center'
              alignItems='center'
              ml={30}

              >
                  <Container margin='auto'  justifyContent='center' >
                  <Image src='https://img.naukimg.com/logo_images/groups/v2/4156.gif ' ml={12} mt={3}  height={38}/>
                  </Container>
                  <Container width='80%'   padding={5} mt={5} bg='green.50' borderRadius='15%'>
                      <Text fontSize={20} fontWeight='bold' >Cognizant </Text>
                      <Text><StarIcon height={4} mt={-1} color='orange.400'/> 3.9 | 28.8K+ reviews</Text>
                  </Container>
                  <Container mt={3}>
                      <Text lineHeight={5}> Leading ITeS compony with globle presence</Text>
                      <Button mt={3} borderRadius='25%' color='teal' >View Jobs</Button>
                  </Container>

              </Box>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              
              <div>
           <Box  
 
              w={250}
              h={320}
              border='1px solid RGBA(0, 0, 0, 0.06)'
              justifyContent='center'
              textAlign='center'
              alignItems='center'
              ml={30}

              >
                  <Container margin='auto'  justifyContent='center' >
                  <Image src='https://img.naukimg.com/logo_images/groups/v2/42932.gif ' ml={12} mt={3}  height={38}/>
                  </Container>
                  <Container width='80%'   padding={5} mt={5} bg='green.50' borderRadius='15%'>
                      <Text fontSize={20} fontWeight='bold' >Genpact </Text>
                      <Text><StarIcon height={4} mt={-1} color='orange.400'/> 3.9 | 27.4K+ reviews</Text>
                  </Container>
                  <Container mt={3}>
                      <Text lineHeight={5}>global Professional services Film</Text>
                      <Button mt={3} borderRadius='25%' color='teal' >View Jobs</Button>
                  </Container>

              </Box>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              
              <div>
           <Box  
 
              w={250}
              h={320}
              border='1px solid RGBA(0, 0, 0, 0.06)'
              justifyContent='center'
              textAlign='center'
              alignItems='center'
              ml={30}

              >
                  <Container margin='auto'  justifyContent='center' >
                  <Image src='https://img.naukimg.com/logo_images/groups/v2/4577755.gif' ml={12} mt={3}  height={38}/>
                  </Container>
                  <Container width='80%'   padding={5} mt={5} bg='green.50' borderRadius='15%'>
                      <Text fontSize={20} fontWeight='bold' >Accolite Digital </Text>
                      <Text><StarIcon height={4} mt={-1} color='orange.400'/> 3.9 | 27.4K+ reviews</Text>
                  </Container>
                  <Container mt={3}>
                      <Text lineHeight={5}>Applied Materials</Text>
                      <Button mt={3} borderRadius='25%' color='teal' >View Jobs</Button>
                  </Container>

              </Box>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              
              <div>
           <Box  
 
              w={250}
              h={320}
              border='1px solid RGBA(0, 0, 0, 0.06)'
              justifyContent='center'
              textAlign='center'
              alignItems='center'
              ml={30}

              >
                  <Container margin='auto'  justifyContent='center' >
                  <Image src='https://img.naukimg.com/logo_images/groups/v2/1574056.gif' ml={12} mt={3}  height={38}/>
                  </Container>
                  <Container width='80%'   padding={5} mt={5} bg='green.50' borderRadius='15%'>
                      <Text fontSize={20} fontWeight='bold' >Applied material  </Text>
                      <Text><StarIcon height={4} mt={-1} color='orange.400'/> 3.9 | 27.4K+ reviews</Text>
                  </Container>
                  <Container mt={3}>
                      <Text lineHeight={5}> Leading in material engineering solutaion</Text>
                      <Button mt={3} borderRadius='25%' color='teal' >View Jobs</Button>
                  </Container>

              </Box>
              </div>
          </SwiperSlide>
            
           

        </Swiper>
        <Container textAlign='center' mt={10} ><Button border='1px solid teal' p={7} borderRadius='30%' bg='white' color='teal' fontWeight='bold'>View All compony</Button></Container>

      </Box>
    </div>
  )
}

export default FeatureCompony