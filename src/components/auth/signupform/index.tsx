import React, { useState } from "react";
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
import { NewUser } from "../../../interface";
import { registerUser } from "../../../services/auth";
import { Redirect } from "react-router-dom";

interface props {}

const SignupForm: React.FC<props> = () => {
  const toast = useToast();
  const [redirectOnSignup, setRedirectOnSignup] = useState(false);

  const register = async (
    values: NewUser,
    actions: FormikHelpers<{
      email: string;
      fullname: string;
      password: string;
    }>
  ) => {
    try {
      const response = await registerUser(values);
      if (response) {
        toast({
          title: response.data.msg,
          duration: 4000,
          position: "top-right",
          status: "success",
          variant: "subtle",
        });
        actions.setSubmitting(false);
        actions.resetForm();
        setTimeout(() => {
          setRedirectOnSignup(true);
        }, 2000);
      }
      console.log(response.data);
    } catch (error) {
      toast({
        title: error.response.data.msg,
        duration: 3000,
        position: "top-right",
        status: "error",
        variant: "subtle",
      });
      actions.setSubmitting(false);
      throw error;
    }
  };

  return (
    <>
      {redirectOnSignup && <Redirect to="/login" />}
      <Formik
        initialValues={{ fullname: "", email: "", password: "" }}
        validationSchema={Yup.object({
          fullname: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(6, "Password must be a minium of 6 characters")
            .required("Required"),
        })}
        onSubmit={(values, actions) => {
          register(values, actions);
        }}
      >
        {(formik) => (
          <Form style={{ width: "100%" }}>
            <VStack spacing={7}>
              <Box width="100%">
                <FormControl
                  isInvalid={
                    formik.touched.fullname && formik.errors.fullname
                      ? true
                      : false
                  }
                >
                  <AuthInput
                    labelText="Full name"
                    variant="grey"
                    {...formik.getFieldProps("fullname")}
                  />
                  <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
                </FormControl>
              </Box>

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
                Create account
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
