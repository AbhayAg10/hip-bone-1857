import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import {
  Avatar,
  Center,
  Heading,
  HStack,
  Slide,
  SlideFade,
  Spinner,
  Stack,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const CompanyProfile = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8084/api/companies/${id}`)
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  console.log(data);

  if (!data) {
    return (
      <Center h={"80vh"} direction='row' spacing={4}>
        <Spinner color='blue.500' size='xl' />
      </Center>
    );
  } else {
    return (
      <Center h={"full"} w={"full"}>
        <VStack mt={"12"}>
          <SlideFade in={true} offsetY={20}>
            <HStack gap={6}>
              <SlideFade in={true} offsetY={-40}>
                <Avatar
                  src={data.logo}
                  size={"2xl"}
                  name={data.name}
                  borderColor={"gray.200"}
                  borderWidth={"1px"}
                  p={"1"}
                />
              </SlideFade>
              <VStack align={"flex-start"}>
                <Heading size={"lg"}>{data.name}</Heading>
                <Wrap mt={"4"} maxWidth={"500px"}>
                  {data.industry.map((industryItem, index) => (
                    <WrapItem
                      borderColor={"gray.200"}
                      borderWidth={"1px"}
                      borderRadius={"md"}
                      px={2}
                      fontSize={"sm"}
                      opacity={0.8}
                    >
                      {industryItem}
                    </WrapItem>
                  ))}
                </Wrap>
              </VStack>
            </HStack>
          </SlideFade>
        </VStack>
      </Center>
    );
  }
};

export default CompanyProfile;

// {
//     "_id": "639a069956f8673e46cf5c7e",
//     "name": "OMICS International",
//     "location": "Online",
//     "industry": [
//         "Printing & Publishing",
//         "Advertising / PR / Events",
//         "Private",
//         "Indian MNC",
//         "B2C",
//         "B2B",
//         "Conglomerate"
//     ],
//     "rating": 2.5,
//     "logo": "https://img.naukimg.com/logo_images/groups/v1/1424980.gif",
//     "reviewsCount": 5,
//     "about": "We are a group of publications including iMedPub LTD and Conference Series LLC LTD. We Organize 3000+ Conferences across USA, Europe & Asia with support from 1000 more scientific societies and Publishes 700+ Open Access Journals which contains over 50000 eminent personalities, reputed scientists as editorial board members.\nWe are an organization that amalgamates Open Access Publications and International science events for the benefit of the global scientific community. The organization was established in the year 2007 with the sole aim of providing a platform for 'Open Access' to the research information pertaining to diversified fields of Science and technology. We publishe scholarly journals that can be easily accessed online without paying any subscription charges. Our organization plays an instrumental role in expanding the reach of research data in the real time, which in turn helps in furthering the research. Research Scholars, Students, Libraries, Educational Institutions, Research centers and industries are the main stakeholders that are benefitted from open access to research data. We also organize 3000+ International conferences across the globe, where knowledge transfer takes place through debates, round table discussions, poster presentations, workshops, symposia and exhibitions.",
//     "companysize": 5000,
//     "__v": 0
// }
