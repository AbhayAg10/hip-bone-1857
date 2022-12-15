import { Heading, VStack } from "@chakra-ui/react";
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
    <VStack>
      <Heading>Showing Companies</Heading>
      {companies.map((company) => (
        <CompaniesCard {...company} />
      ))}
    </VStack>
  );
};

export default CompaniesContainer;
