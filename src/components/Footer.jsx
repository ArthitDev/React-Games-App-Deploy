import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
const Footer = () => {
  const textColor = useColorModeValue("black.400", "gray.600");

  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.300", "gray.900")}
      py={4}
      position="sticky"
      bottom={0}
      width="100%"
    >
      <Text color={textColor} textAlign="center">
        Developed by ArthitDev
      </Text>
    </Box>
  );
};

export default Footer;
