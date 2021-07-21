import React from "react";
import * as Yup from "yup";
import { Form, Formik, FormikHelpers } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  useToast,
  VStack,
} from "@chakra-ui/react";
import AuthInput from "../../input";
import { loginUser } from "../../../services/auth";
import { useUser } from "../../../hooks/useUser";

interface props {}

const LoginForm: React.FC<props> = () => {
  const toast = useToast();
  const user = useUser();

  const login = async (
    values: { email: string; password: string },
    actions: FormikHelpers<{
      email: string;
      password: string;
    }>
  ) => {
    try {
      const response = await loginUser(values);
      if (response) {
        toast({
          title: response.data.msg,
          duration: 4000,
          position: "top-right",
          status: "success",
          variant: "subtle",
        });
        user?.setUser(response.data.data);
        actions.setSubmitting(false);
        actions.resetForm();
        console.dir(response.data);
      }
    } catch (error) {
      toast({
        title: error.response.data.msg,
        duration: 4000,
        position: "top-right",
        status: "error",
        variant: "subtle",
      });
      actions.setSubmitting(false);
      throw error;
    }
  };

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
        login(values, actions);
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
