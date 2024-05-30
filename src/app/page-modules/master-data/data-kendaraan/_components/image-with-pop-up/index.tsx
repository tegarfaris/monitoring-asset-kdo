import { Box, Flex, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const ImageWithPopup: React.FC<{images: string[]}> = ({ images }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <>
        <Box onClick={onOpen} cursor="pointer">
          <Image
            src={images[currentIndex]}
            alt={`asset-mobil-${currentIndex}`}
            borderRadius="5px"
          />
        </Box>
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent maxW="80%">
            <ModalCloseButton />
            <ModalBody>
              <Flex justifyContent="center" alignItems="center" position="relative">
                {images.length > 1 && (
                  <IconButton
                    icon={<FaArrowLeft />}
                    onClick={handlePrev}
                    position="absolute"
                    left="10px"
                    zIndex="1"
                    aria-label="prev"
                  />
                )}
                <Image
                  src={images[currentIndex]}
                  alt={`asset-mobil-${currentIndex}`}
                  w="full"
                  borderRadius="5px"
                />
                {images.length > 1 && (
                  <IconButton
                    icon={<FaArrowRight />}
                    onClick={handleNext}
                    position="absolute"
                    right="10px"
                    zIndex="1"
                    aria-label="next"
                  />
                )}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  export default ImageWithPopup