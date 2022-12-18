import { Heading, HStack, SlideFade, VStack } from "@chakra-ui/react";
import React from "react";
import CompaniesContainer from "./CompaniesContainer";
import FiltersContainer from "./FiltersContainer";

const Companies = () => (
  <VStack>
    <SlideFade in={true} offsetY={20}>
      <Heading size={"lg"} m={"6"} mt={24}>
        Top companies hiring now
      </Heading>
    </SlideFade>
    <HStack align={"flex-start"} w={"90vw"}>
      <FiltersContainer />
      <CompaniesContainer />
    </HStack>
  </VStack>
);

export default Companies;
