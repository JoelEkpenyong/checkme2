const Button = {
  baseStyle: {
    borderRadius: "10px",
    fontWeight: 600,
    textAlign: "center",
    padding: "0.867em 1.6em",
    color: "gray.100",
  },
  variants: {
    primary: {
      backgroundColor: "primary.500",
      _hover: {
        bg: "#1988c7",
      },
    },
    grey: {
      backgroundColor: "gray.700",
      _hover: {
        bg: "#2e2e2e",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};

export default Button;
