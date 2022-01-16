import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

interface Props {}

export const AddTask = (props: Props) => {
  return (
    <Box>
      <SimpleGrid spacing={"1rem"} columns={2}>
        <Box bg="tomato" minW="10rem">
          1
        </Box>
        <Box bg="tomato" minW="10rem">
          2
        </Box>
        <Box bg="tomato" minW="10rem">
          3
        </Box>
      </SimpleGrid>
    </Box>
  );
};
