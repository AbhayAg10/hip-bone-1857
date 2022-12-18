import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsBag } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { BsFillStarFill} from 'react-icons/bs';

import jobData from "./jobData";

const JobPage = () => {
  const jobdatas = jobData.map(job => {
    return (
      <Link to={`/jobpage/${job.id}`}>
      <Box key={job.id} mt='50px'  boxShadow= 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'  mb='30px' p='20px'>
        <Text fontSize='20px'>{job.title}</Text>
        <h3>{job.subtitle} </h3>
        <Flex >
          <Box display='flex'  mr='20px'>
          <BsBag />
          <h2> {job.exp} years</h2>
          </Box>
          <Box  mr='20px' color='blue.400'>   ₹ Not closed</Box>
          <Box display='flex'  mr='20px'>
            <Box mt='2px' color='blue'> <CiLocationOn /></Box>
          
          <h2> {job.location} years</h2>
          </Box>
        </Flex>
        <Text> Skill :- {job.skill}</Text>
      
      </Box> </Link>
    );
  });

  return (
    <>
      <h1></h1>
      <Box ml='10' mt='20px' fontWeight='bold' width='60%' fontSize='20px' mb='-35px'>{jobData.length} Jobs Based on your interest</Box>
      <Box display='flex' justifyContent='space-between' >
      
      <Box ml='10' width='60%'>{jobdatas}</Box>
      <Box mr='10' mt='80px' width='30%' >
         <Box width='400px' boxShadow= 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' p='10px'>
         <Text fontSize='18px'  fontWeight='bold'> Recommended courses for you</Text>
                    <Text fontSize='12px'mb='30px'>Suggested Certifications to help you Earn Higher Salary, Better Jobs</Text>
                    <Text fontSize='15px' fontWeight='bold'>Microsoft Office 2007 Bunder </Text>

                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                            <BsFillStarFill
                                key={i}
                                color={i < 3 ? 'RGBA(0, 0, 0, 0.36)' : 'RGBA(0, 0, 0, 0.36)'}
                            />
                            ))} (132 reviews)
                            </Box>
                            <Box p='20px' fontSize='14px' >
                            <ul>
                            <li>Microsoft Office 2007 is the Windows version of the Microsoft Office System, Microsofts productivity...</li>
                            <li style={{marginTop:'15px'}}>With the help of Microsoft Office experts, you all learn valuable and time saving techniques for work...</li>
                         
                          </ul>  
                            </Box>
                            <Text fontSize='15px' fontWeight='bold'>Microsoft Excel for Data analyst </Text>

                            <Box display='flex' mt='2' alignItems='center'>
                              {Array(5)
                                  .fill('')
                                  .map((_, i) => (
                                  <BsFillStarFill
                                      key={i}
                                      color={i < 3 ? 'RGBA(0, 0, 0, 0.36)' : 'RGBA(0, 0, 0, 0.36)'}
                                  />
                                  ))} (1341 reviews)
                            </Box>
                            <br/>
                    <hr/>
                    <Text mt='20px' fontWeight='bold' color='blue.500'>View All</Text>
                    

                    
                    


         </Box>
         
       </Box>
      </Box>
    </>
  );
};

export default JobPage;
