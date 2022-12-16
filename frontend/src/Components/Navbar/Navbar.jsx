import React from 'react'
import {Box, Button, Container, Divider, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Stack, useDisclosure} from '@chakra-ui/react';
import mainlogo from '../../Components/req/jobpandacom-logo.png'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container
      maxW={"100%"}
      h={"72px"}
      border={"1px"}
      borderColor={"black"}
    >
      <Flex
        direction={"row"}
        w={"80%"}
        h={"100%"}
        m={"auto"}
        // border={"1px"}
        // borderColor={"black"}
        display={"flex"}
      >
        <Box
          // border={"1px"}
          // borderColor={"green"}
          w={"150px"}
          h = {"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"} 
          cursor={"pointer"}
        >
          <Image 
            w={"90%"}
            src={mainlogo} 
            alt='Logo'
            alignItems={"center"}
            cursor={"pointer"} 
          />
        </Box>
        <Stack
          direction={"row"}
          // border={"1px"}
          // borderColor={"green"}
          w = {"280px"}
          h={"100%"}
          ml={'80px'}
        >
          <Box
            // border={"1px"}
            // borderColor={"blue"}
            h={"100%"}
            display={"flex"}
            w={"33.3%"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            Jobs
          </Box>
          <Box
            // border={"1px"}
            // borderColor={"blue"}
            h={"100%"}
            display={"flex"}
            w={"33.3%"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            Companies
          </Box>
          <Box
            // border={"1px"}
            // borderColor={"blue"}
            h={"100%"}
            display={"flex"}
            w={"33.3%"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"500"}
            lineHeight={"20px"}
            color={"#445578"}
            cursor={"pointer"}
          >
            Services
          </Box>
        </Stack>
        <Stack
          display={"flex"}
          ml={"340px"}
          direction={"row"}
          // border={"1px"}
          // borderColor={"green"}
          h={"100%"}
          w={"350px"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Button
            border={"1px"}
            borderColor={"#457eff"}
            borderRadius={"50px"}
            color={"#457eff"}
            bg={"white"}
            h={"40px"}
            w={"80px"}
            fontWeight={"600"}
          >
            Login
          </Button>
          <Button
            border={"none"}
            borderRadius={"50px"}
            color={"white"}
            borderColor={"#ff7555"}
            bgColor={"#ff7555"}
            w={"100px"}
          >
            Register
          </Button>
          <Divider borderColor={"#445578"} orientation='vertical' h={"30%"} />
          <Menu isOpen={isOpen}>
            <MenuButton
              _hover={{
                background: "white",
                border: "none"
              }}
              border={"none"}
              bgColor={"white"}
              as={Button} 
              rightIcon={<ChevronDownIcon />}
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              color={"#445578"}
            >
              For employers 
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              <MenuItem>Buy online</MenuItem>
              <MenuItem>Hiring solutions</MenuItem>
              <MenuItem>Employer Login</MenuItem>              
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Container>
  )
}

export default Navbar