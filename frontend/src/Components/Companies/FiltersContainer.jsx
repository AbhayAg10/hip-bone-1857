import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getCompaniesByIndustry } from "../../redux/companyReducer/action";

const FiltersContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const handleCheckBox = (e) => {
    console.log(e);
    dispatch(getCompaniesByIndustry(e));
  };

  console.log(data);

  return (
    <VStack w={"25%"} minW={"250px"} align={"flex-start"}>
      <HStack size={"sm"} opacity={0.9} fontWeight={"medium"} mb={4} mt={"1.5"}>
        <Icon as={BiFilterAlt} />
        <Text>Filters</Text>
      </HStack>
      <Accordion w={"100%"} allowMultiple>
        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as={"span"} flex={1} textAlign='left' fontSize={"md"}>
                Company Type
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <CheckboxGroup onChange={handleCheckBox}>
              <VStack align={"flex-start"}>
                <Checkbox value='Foreign MNC'>Foreign MNC</Checkbox>
                <Checkbox value='Startup'>Startup</Checkbox>
                <Checkbox value='Indian MNC'>Indian MNC</Checkbox>
                <Checkbox value='Corporate'>Corporate</Checkbox>
              </VStack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

export default FiltersContainer;
