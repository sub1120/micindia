import { Box, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Link } from "@chakra-ui/next-js";

import flag from "/assets/bg/flag.jpg";
import FeatureCard from "@/components/card/FeatureCard";
import CustomStat from "@/components/stat/CustomStat";

export default function Home() {
  return (
    <>
      <Head>
        <title>MIC Organisation India | We Rise By Lifting Others</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/logo.jpg" rel="icon"></link>
      </Head>
      <Box as="main" mx={["20px", "30px", "60px"]}>
        <Box as="section">
          <Heading as="h2" size={["md", "lg", "xl"]}>
            Working Areas
          </Heading>
          <Flex
            direction="column"
            gap={["20px", "30px", "60px"]}
            my={["20px", "30px", "60px"]}
          >
            <FeatureCard
              heading="The heading"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, nulla? Perspiciatis qui consequuntur sint sunt at sequi tenetur assumenda fugiat earum nihil corporis quis voluptatem, quas similique placeat sapiente tempora."
              image={flag}
              imagePos="left"
            />
            <FeatureCard
              heading="The heading"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, nulla? Perspiciatis qui consequuntur sint sunt at sequi tenetur assumenda fugiat earum nihil corporis quis voluptatem, quas similique placeat sapiente tempora."
              image={flag}
              imagePos="right"
            />
            <FeatureCard
              heading="The heading"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, nulla? Perspiciatis qui consequuntur sint sunt at sequi tenetur assumenda fugiat earum nihil corporis quis voluptatem, quas similique placeat sapiente tempora."
              image={flag}
              imagePos="left"
            />
          </Flex>
        </Box>

        <Flex
          as="section"
          direction={{ base: "column", sm: "row" }}
          justify="space-around"
          flexWrap="wrap"
          gap={["20px", "30px", "40px"]}
          my={["20px", "30px", "40px"]}
          mx={["20px", "30px", "40px"]}
        >
          <CustomStat count={3000} heading="Social Drives"></CustomStat>
          <CustomStat count={100} heading="Events"></CustomStat>
          <CustomStat count={300} heading="Volunteers"></CustomStat>
          <CustomStat count={50} heading="Blood Camps"></CustomStat>
        </Flex>

        <Flex
          as="section"
          direction="column"
          justify="center"
          align="center"
          p="30px"
          gap={["20px", "30px", "40px"]}
          my={["20px", "30px", "40px"]}
          bgColor="gray.100"
        >
          <Heading as="h2" size={["md", "lg", "xl"]} textAlign="center">
            Join Our Hands, and lets develop this nation together.
          </Heading>
          <Box layerStyle="base" p="10px" borderRadius="5px">
            <Link href="/join">JoinUs</Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
