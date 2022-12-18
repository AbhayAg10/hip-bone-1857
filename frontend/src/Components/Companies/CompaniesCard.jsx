import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
  SlideFade,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const CompaniesCard = ({ logo, name, rating, reviewsCount, industry, _id }) => {
  const navigate = useNavigate();
  return (
    <SlideFade in={true} offsetX='-20px'>
      <Card
        direction={"row"}
        overflow='hidden'
        variant='outline'
        align={"center"}
        justify={"center"}
        p={"1.5"}
        transition='all 0.2s ease-in-out'
        cursor={"pointer"}
        _hover={{
          boxShadow: "xl",
          transition: "all 0.2s ease-in-out",
          transform: "translate(1px, -2px)",
        }}
        onClick={() => {
          navigate("/companies/" + _id);
        }}
      >
        <Image src={logo} maxW='60px' maxH='60px' />
        <Stack>
          <CardBody as={Flex} direction={"column"} align={"flex-start"}>
            <Heading size={"md"}>{name}</Heading>
            <HStack align={"center"} mt='2' justify={"flex-start"}>
              <Box display='flex' alignItems='center'>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      boxSize={"3"}
                      key={i}
                      color={i < rating ? "gold" : "gray.300"}
                    />
                  ))}
              </Box>
              <Text fontSize={"smaller"} opacity={0.9}>
                || Reviews: {reviewsCount}
              </Text>
            </HStack>
            <Wrap mt={"4"}>
              {industry.map((industryItem, index) => (
                <WrapItem
                  key={index}
                  borderColor={"gray.200"}
                  borderWidth={"1px"}
                  borderRadius={"md"}
                  px={2}
                  fontSize={"xs"}
                  opacity={0.8}
                >
                  {industryItem}
                </WrapItem>
              ))}
            </Wrap>
          </CardBody>
        </Stack>
      </Card>
    </SlideFade>
  );
};

export default CompaniesCard;
