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
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";

const CreateCompany = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      rememberMe: false,
    },
    validate: (values) => {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <HStack
      zIndex={"9999"}
      position='absolute'
      bg={"white"}
      w={"100vw"}
      h={"100vh"}
    >
      <Center w={"full"}>
        <VStack>
          <Heading>Create a company</Heading>
          <Flex bg='gray.100' align='center' justify='center'>
            <Box bg='white' p={6} rounded='md'>
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4} align='flex-start'>
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
                      id='Industry'
                      name='Industry'
                      type='text'
                      variant='filled'
                      onChange={formik.handleChange}
                      value={formik.values.Industry}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor='location'>Rating</FormLabel>
                    <Input
                      id='rating'
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
                </VStack>
              </form>
            </Box>
          </Flex>
        </VStack>
      </Center>
    </HStack>
  );
};

export default CreateCompany;
