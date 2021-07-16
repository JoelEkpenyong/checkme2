import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Landing } from "./landing";
import { Route, Switch } from "react-router-dom";
import { Login } from "./auth/login";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
