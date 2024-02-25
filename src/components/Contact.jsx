import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Link,
  Icon,
  HStack,
  Grid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [isFacebookModalOpen, setFacebookModalOpen] = useState(false);
  const [isGithubModalOpen, setGithubModalOpen] = useState(false);

  const handleFacebookModalOpen = () => setFacebookModalOpen(true);
  const handleFacebookModalClose = () => setFacebookModalOpen(false);

  const handleGithubModalOpen = () => setGithubModalOpen(true);
  const handleGithubModalClose = () => setGithubModalOpen(false);

  return (
    <ChakraProvider>
      <Flex
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        mt="50"
      >
        <Box p={8} borderWidth={1} mt={-20} borderRadius="lg">
          <Flex direction="column" alignItems="center">
            <Image
              src="./images/Profile.jpg"
              alt="Profile"
              boxSize="150px"
              borderRadius="full"
              mb={0}
            />
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Arthit LungYa
            </Text>
            <Text mb={2}>รหัสนักศึกษา : 641413017</Text>
            <Text mb={2}>สาขาวิชา : เทคโนโลยีสารสนเทศ</Text>
            <Text mb={2}>ที่อยู่ : แม่อาย , เชียงใหม่, ประเทศไทย</Text>
            <Text mb={4}>เบอร์โทร : 0979574687</Text>
            <VStack spacing={4} alignItems="center">
              <HStack>
                <Icon as={FaFacebook} boxSize={6} />
                <Link
                  href="https://www.facebook.com/MR.Arthit.Profile"
                  isExternal
                  color="blue.500"
                >
                  Facebook คลิกเลย !!
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaGithub} boxSize={6} />
                <Link
                  href="https://github.com/ArthitDev"
                  isExternal
                  color="blue.500"
                >
                  Github คลิกเลย !!
                </Link>
              </HStack>
            </VStack>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={5}>
              <Box
                borderWidth={1}
                borderRadius="lg"
                p={4}
                cursor="pointer"
                onClick={handleFacebookModalOpen}
              >
                <Text mb={2} fontSize="lg" fontWeight="bold" textAlign="center">
                  แสกนเพื่อไปยัง Facebook
                </Text>
                <Image
                  src="./images/Facebook-QR.jpg"
                  alt="QrFacebook"
                  width="250px"
                  borderRadius="lg"
                />
              </Box>
              <Box
                borderWidth={1}
                borderRadius="lg"
                p={4}
                cursor="pointer"
                onClick={handleGithubModalOpen}
              >
                <Text mb={2} fontSize="lg" fontWeight="bold" textAlign="center">
                  แสกนเพื่อไปยัง Github
                </Text>
                <Image
                  src="./images/Github-QR.jpg"
                  alt="QrGithub"
                  width="250px"
                  borderRadius="lg"
                />
              </Box>
            </Grid>
          </Flex>
        </Box>

        {/* Facebook QR Code Modal */}
        <Modal
          isOpen={isFacebookModalOpen}
          onClose={handleFacebookModalClose}
          size="xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src="./images/Facebook-QR.jpg"
                alt="QrFacebook"
                width="100%"
                height="100%"
                padding="20px"
                objectFit="contain"
              />
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Github QR Code Modal */}
        <Modal
          isOpen={isGithubModalOpen}
          onClose={handleGithubModalClose}
          size="xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src="./images/Github-QR.jpg"
                alt="QrGithub"
                width="100%"
                height="100%"
                padding="20px"
                objectFit="contain"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </ChakraProvider>
  );
};

export default Contact;
