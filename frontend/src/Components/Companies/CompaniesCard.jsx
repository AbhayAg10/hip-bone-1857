import {
  Card,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CompaniesCard = ({ logo, name }) => {
  return (
    <Card direction={"row"} overflow='hidden' variant='outline'>
      <Image src={logo} maxW='60px' maxH='60px' />
      <Stack>
        <CardHeader>
          <Heading size={"md"}>{name}</Heading>
        </CardHeader>
      </Stack>
    </Card>
  );
};

export default CompaniesCard;
