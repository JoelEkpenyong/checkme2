import { extendTheme } from "@chakra-ui/react";
import global from "./foundations/global";
import colors from "./foundations/colors";
import textStyles from "./foundations/text";
import fonts from "./foundations/fonts";

const overides = {
  styles: {
    global,
  },
  colors,
  textStyles,
  fonts,
};

export default extendTheme(overides);
