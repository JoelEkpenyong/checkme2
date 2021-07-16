import { extendTheme } from "@chakra-ui/react";
import global from "./foundations/global";
import Button from "./components/button";
import Input from "./components/input";
import FormLabel from "./components/formlabel";
import colors from "./foundations/colors";
import textStyles from "./foundations/text";
import fonts from "./foundations/fonts";

const overides = {
  styles: {
    global,
  },
  components: {
    Button,
    Input,
    FormLabel,
  },
  colors,
  textStyles,
  fonts,
};

export default extendTheme(overides);
