import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaChevronUp } from 'react-icons/fa';

function ScrollButton() {
  const scrollTopFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <IconButton
      icon={<FaChevronUp />}
      colorScheme="teal"
      onClick={scrollTopFunction}
      aria-label="back to top"
    />
  );
}

export default ScrollButton;
