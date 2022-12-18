import {
  Center,
  Heading,
  SimpleGrid,
  SlideFade,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CompaniesCard from "./CompaniesCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompanies } from "../../redux/companyReducer/action";

const CompaniesContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getCompanies(dispatch));
  }, [dispatch]);

  console.log(data);

  return (
    <VStack width={"90vw"} align={"flex-start"} m={2} p={2}>
      <SlideFade in={true} offsetY={20}>
        <Heading size={"sm"} opacity={0.9} fontWeight={"medium"} mb={4}>
          Showing {data.total} Companies:
        </Heading>
      </SlideFade>
      {!data.companies ? (
        <Center direction='row' spacing={4} w={"80vw"} h={"20vw"}>
          <Spinner color='blue.500' size='xl' />
        </Center>
      ) : (
        <SimpleGrid columns={2} spacing={5}>
          {data.companies.map((company) => (
            <CompaniesCard key={company._id} {...company} />
          ))}
        </SimpleGrid>
      )}
    </VStack>
  );
};

export default CompaniesContainer;
