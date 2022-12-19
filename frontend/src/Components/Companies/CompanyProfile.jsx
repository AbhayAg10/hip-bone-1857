import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Slide,
  SlideFade,
  Spinner,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
// import * as dotenv from "dotenv";
// dotenv.config();

const CompanyProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rich-puce-peacock-kilt.cyclic.app/api/companies/${id}`)
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  console.log(data);

  if (!data) {
    return (
      <Center h={"100vh"} direction='row' spacing={4}>
        <Spinner color='blue.500' size='xl' />
      </Center>
    );
  } else {
    return (
      <Center h={"full"} w={"80vw"} margin={"auto"}>
        <VStack my={"24"}>
          <SlideFade in={true} offsetY={20}>
            <HStack gap={6}>
              <SlideFade in={true} offsetY={-40}>
                <Avatar
                  src={data.logo}
                  size={"2xl"}
                  name={data.name}
                  borderColor={"gray.200"}
                  borderWidth={"1px"}
                  p={"1"}
                />
              </SlideFade>
              <VStack align={"flex-start"}>
                <Heading size={"lg"}>{data.name}</Heading>
                <Wrap mt={"4"} maxWidth={"500px"}>
                  {data.industry.map((industryItem, index) => (
                    <WrapItem
                      borderColor={"gray.200"}
                      borderWidth={"1px"}
                      borderRadius={"xl"}
                      px={3}
                      py={1}
                      fontSize={"sm"}
                      opacity={0.8}
                      key={index}
                    >
                      {industryItem}
                    </WrapItem>
                  ))}
                </Wrap>
              </VStack>
              {/* About */}
            </HStack>
            <VStack align={"flex-start"} mt={10}>
              <Heading fontSize={"2xl"} fontWeight={"semibold"}>
                About {data.name}
              </Heading>
              <Text align={"justify"} opacity={0.9}>
                {data.about}
              </Text>
              <Heading fontSize={"2xl"} fontWeight={"semibold"}>
                More Information
              </Heading>
              <VStack align={"flex-start"} opacity={0.9}>
                <HStack>
                  <Text align={"justify"}>Rating: </Text>
                  <Box display='flex' alignItems='center'>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          boxSize={"3"}
                          key={i}
                          color={i < data.rating ? "gold" : "gray.300"}
                        />
                      ))}
                  </Box>
                  <Text>{`(${data.rating}/5)`}</Text>
                </HStack>
                <Text align={"justify"}>Location: {data.location}</Text>
                <Text align={"justify"}>
                  Company Size: {">"}
                  {data.companysize}
                </Text>
              </VStack>
            </VStack>
          </SlideFade>
        </VStack>
      </Center>
    );
  }
};

export default CompanyProfile;

