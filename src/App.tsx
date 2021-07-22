import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Landing } from "./pages/landing";
import {
  Redirect,
  Route,
  RouteProps,
  Switch,
  useLocation,
} from "react-router-dom";
import { Signup } from "./pages/auth/signup";
import { Login } from "./pages/auth/login";
import { Dashboard } from "./pages/dashboard";
import { AnimatePresence } from "framer-motion";
import { isAuthenticated } from "./services/auth";
import { UserProvider } from "./context/userContext";
require("dotenv").config();

function App() {
  const location = useLocation();

  const AuthenticatedRoute: React.FC<RouteProps> = ({ children, ...props }) => {
    const authenticated = isAuthenticated();

    return (
      <Route
        {...props}
        render={() => (authenticated ? children : <Redirect to="/" />)}
      />
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Landing} />
          <Route path="/register" component={Signup} />
          <Route path="/login" component={Login} />
          <AuthenticatedRoute path="/dashboard">
            <UserProvider>
              <Dashboard />
            </UserProvider>
          </AuthenticatedRoute>
        </Switch>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default App;
