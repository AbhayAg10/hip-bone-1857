import { Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import CompaniesCard from "./CompaniesCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompanies } from "../../redux/companyReducer/action";

const CompaniesContainer = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getCompanies(dispatch));
  }, []);

  console.log(companies);
  return (
    <VStack align={"flex-start"} m={2} p={2}>
      <Heading size={"sm"} opacity={0.9} fontWeight={"medium"} mb={4}>
        Showing {companies.length} Companies:
      </Heading>
      <SimpleGrid columns={2} spacing={5}>
        {companies.map((company) => (
          <CompaniesCard key={company._id} {...company} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default CompaniesContainer;
