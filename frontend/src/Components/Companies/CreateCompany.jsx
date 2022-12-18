import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  SlideFade,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";

import axios from "axios";

const CreateCompany = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      industry: "Corporate, MNC",
      rating: "4.7",
      logo: "https://img.naukimg.com/logo_images/groups/v1/6102877.gif",
      reviewsCount: "10",
      about: "",
      companysize: "1000",
      rememberMe: false,
    },
    validate: (values) => {
      console.log(values.industry);
      // values.industry = values.industry
      //   ?.split(",")
      //   .map((industry) => industry.trim());
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // axios
      //   .post("http://localhost:8084/api/companies", values)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  });
  return (
    <SlideFade in={true}>
      <VStack w={"100%"} h={"90vh"} mb={28}>
        <Heading mt={28}>Create a company</Heading>
        <Center w={"full"} h={"full"}>
          <form onSubmit={formik.handleSubmit}>
            <SimpleGrid columns={2} spacing={10}>
              <FormControl>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='location'>Location</FormLabel>
                <Input
                  id='location'
                  name='location'
                  type='text'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.location}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='location'>Industry</FormLabel>
                <Input
                  id='industry'
                  name='industry'
                  type='text'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.industry}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='location'>Rating</FormLabel>
                <Input
                  id='rating'
                  defaultValue=''
                  name='rating'
                  type='number'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.rating}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='location'>Logo</FormLabel>
                <Input
                  id='logo'
                  name='logo'
                  type='url'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.logo}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='location'>Reviews</FormLabel>
                <Input
                  id='reviewsCount'
                  name='reviewsCount'
                  type='name'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.reviewsCount}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='location'>About</FormLabel>
                <Input
                  id='about'
                  name='about'
                  type='name'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.about}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor='location'>Company Size</FormLabel>
                <Input
                  id='companysize'
                  name='companysize'
                  type='number'
                  variant='filled'
                  onChange={formik.handleChange}
                  value={formik.values.companysize}
                />
              </FormControl>
              <Button type='submit' colorScheme='green' width='full'>
                Submit
              </Button>
            </SimpleGrid>
          </form>
        </Center>
      </VStack>
    </SlideFade>
  );
};

export default CreateCompany;
