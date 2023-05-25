import { Image } from "@chakra-ui/next-js";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import QRImage from "@/assets/images/qr.jpg";

function CustomModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        as="li"
        sx={{
          transition: "all 100ms ease-in-out",
          ":hover": {
            paddingBottom: "10px",
            bgColor: "white",
            color: "blue.500",
          },
        }}
        border="1px"
        borderColor="blue.500"
        bgColor="blue.500"
        color="white"
        p="10px"
        cursor="pointer"
        fontWeight="bold"
        onClick={onOpen}
      >
        Donate
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "md"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Scan QR To Donate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text position="relative" textAlign="center" color="blue.500">
              <Box position="absolute" top="-5px" left="-5px">
                <RiDoubleQuotesL />
              </Box>
              <i>
                Every act of kindness, no matter how small, has the power to
                make a significant impact.
              </i>
              <Box position="absolute" bottom="5px" right="5px">
                <RiDoubleQuotesR />
              </Box>
            </Text>
            <Box pt="10px">
              <Image
                src={QRImage}
                alt="QR Code To Donate"
                w="full"
                borderRadius="5px"
              ></Image>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
