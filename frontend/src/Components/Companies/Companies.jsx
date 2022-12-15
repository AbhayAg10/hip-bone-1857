import { Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import CompaniesContainer from "./CompaniesContainer";
import FiltersContainer from "./FiltersContainer";

const Companies = () => (
  <VStack>
    <Heading size={"lg"} m={"6"}>
      Top companies hiring now
    </Heading>
    <HStack>
      {/* <FiltersContainer /> */}
      <CompaniesContainer />
    </HStack>
  </VStack>
);

export default Companies;
