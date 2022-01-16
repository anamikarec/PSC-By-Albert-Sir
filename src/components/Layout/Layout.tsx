import { Box, Flex, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {}

export const Layout = (props: Props) => {
  return (
    <Box>
      <Flex>
        <VStack w="10rem" h="calc(100vh)" border="1px solid black" align="left">
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
        </VStack>
      </Flex>
    </Box>
  );
};
