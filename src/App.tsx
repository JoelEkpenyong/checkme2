import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Landing } from "./pages/landing";
import { Route, Switch } from "react-router-dom";
import { Signup } from "./pages/auth/signup";
import { Login } from "./pages/auth/login";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
