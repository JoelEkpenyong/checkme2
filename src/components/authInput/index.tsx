import { Box, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import React from "react";

interface props {
  labelText: string;
  value?: string | number;
  variant?: string;
  placeholder?: string;
}

const AuthInput: React.FC<props> = ({
  labelText,
  variant,
  placeholder,
  ...props
}) => {
  return (
    <Box pos="relative" w="100%">
      <FormLabel
        variant="authLabel"
        pos="absolute"
        left={3}
        bottom={7}
        zIndex={1}
        fontSize="0.625rem"
      >
        {labelText}
      </FormLabel>
      <ChakraInput
        variant={variant}
        {...props}
        placeholder={placeholder}
        fontSize="sm"
      />
    </Box>
  );
};

export default AuthInput;
