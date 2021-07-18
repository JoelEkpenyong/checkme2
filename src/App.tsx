import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Landing } from "./pages/landing";
import { Route, Switch, useLocation } from "react-router-dom";
import { Signup } from "./pages/auth/signup";
import { Login } from "./pages/auth/login";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Landing} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default App;
