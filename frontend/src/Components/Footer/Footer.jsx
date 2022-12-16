import { Container, Divider, Flex, Stack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Container
        h={"425px"}
        pt={"80px"}
        pb={"60px"}
        maxW={"100%"}
        border={"1px"}
        borderColor={"black"}
      >
        <Flex
          h={"160px"}
          px={"148px"}
          maxW={"100%"}
          border={"1px"}
          borderColor={"black"}
        >
          <Stack
            direction={"row"}
          >

          </Stack>
        </Flex>
        <Divider mx={"auto"} mt={"48px"} mb={"35px"} orientation={"horizontal"} w={"80%"} borderColor={"black"} />
        <Flex
          h={"45px"}
          px={"148px"}
          maxW={"100%"}
          border={"1px"}
          borderColor={"black"}
        >
        </Flex>
      </Container>
    </>
  )
}

export default Footer