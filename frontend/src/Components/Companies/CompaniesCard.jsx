import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

const CompaniesCard = ({ logo, name, rating, reviewsCount, industry }) => {
  return (
    <Card
      direction={"row"}
      overflow='hidden'
      variant='outline'
      align={"center"}
      justify={"center"}
      p={"1.5"}
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
                borderColor={"gray.200"}
                borderWidth={"1px"}
                borderRadius={"md"}
                px={2}
                fontSize={"xs"}
              >
                {industryItem}
              </WrapItem>
            ))}
          </Wrap>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CompaniesCard;
