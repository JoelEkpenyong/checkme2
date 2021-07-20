import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import AuthInput from "../../input";

interface props {}

const LoginForm: React.FC<props> = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Password must be a minium of 6 characters")
          .required("Required"),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          actions.resetForm();
        }, 1000);
      }}
    >
      {(formik) => (
        <Form style={{ width: "100%" }}>
          <VStack spacing={7}>
            <Box width="100%">
              <FormControl
                isInvalid={
                  formik.touched.email && formik.errors.email ? true : false
                }
              >
                <AuthInput
                  labelText="Email"
                  variant="grey"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
            </Box>

            <Box width="100%">
              <FormControl
                isInvalid={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
              >
                <AuthInput
                  labelText="Password"
                  variant="grey"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
            </Box>
            <Button
              w="100%"
              colorScheme="teal"
              isLoading={formik.isSubmitting}
              type="submit"
            >
              Log in
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;