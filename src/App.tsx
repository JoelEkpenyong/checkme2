import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Text } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Text as="h1" color="gray.100">
          This is the checkme site
        </Text>
      </div>
    </ChakraProvider>
  );
}

export default App;
