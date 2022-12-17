import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

import jobData from "./jobData";

const JobPage = () => {
  const jobdatas = jobData.map(job => {
    return (
      <Link to={`/jobpage/${job.id}`}>
      <Box key={job.id}  boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'  mb='30px' p='20px'>
        <Text fontSize='20px'>{job.title}</Text>
        <h3>{job.subtitle} </h3>
        <Flex >
          <Box display='flex'  mr='20px'>
          <BsBag />
          <h2> {job.exp} years</h2>
          </Box>
          <Box  mr='20px'>   ₹ Not closed</Box>
          <Box display='flex'  mr='20px'>
          <CiLocationOn />
          <h2> {job.location} years</h2>
          </Box>
        </Flex>
        <Text> Skill :- {job.skill}</Text>
      
      </Box> </Link>
    );
  });

  return (
    <>
      <h1>Job</h1>
      <Box display='flex' justifyContent='space-between'>
      <Box bg='blue.400' width='30%'></Box>
      <Box  width='45%'>{jobdatas}</Box>
      <Box bg='blue.400' width='20%'></Box>
      </Box>
    </>
  );
};

export default JobPage;
