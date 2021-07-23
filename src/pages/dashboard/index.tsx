import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Nav } from "../../components/nav";
import { Tasks } from "../../components/tasks";
import { useList } from "../../hooks/useList";
import { getList } from "../../services/list";
import menuIcon from "@iconify-icons/jam/menu";
import { InlineIcon } from "@iconify/react";
import { useNavState } from "../../hooks/useNavState";

interface props {}

export const Dashboard: React.FC<props> = () => {
  const { setLists } = useList();
  const { setNavState } = useNavState();

  useEffect(() => {
    getList().then((response) => {
      setLists(response.data.data);
    });
  }, [setLists]);

  return (
    <Container maxWidth="auto" px={0}>
      <Nav />
      <Box as="main" ml={{ base: 0, md: "280px" }} px={[4, 10]} py="1.625rem">
        <VStack alignItems="flex-start" spacing={5}>
          <HStack spacing={3}>
            <Box
              display={{ base: "inline", md: "none" }}
              as={InlineIcon}
              icon={menuIcon}
              boxSize={8}
              color="#2D9CDB"
              onClick={setNavState.toggle}
            />
            <Text
              as="h3"
              color="primary.500"
              fontWeight="semibold"
              textTransform="capitalize"
              fontSize="2xl"
              m={0}
            >
              projects
            </Text>
          </HStack>
          <InputGroup>
            <InputLeftAddon bg="dark.100" border="none" justifyContent="center">
              <AddIcon fontSize="md" color="primary.500" />
            </InputLeftAddon>
            <Input
              pl={0}
              borderRadius="10px"
              border="none"
              bg="dark.100"
              fontSize="md"
              p="inital"
              color="gray.100"
              _focus={{
                boxShadow: "none",
                borderColor: "gray.300",
              }}
              _placeholder={{
                color: "gray.100",
                fontWeight: "semibold",
              }}
              type="text"
              placeholder="Add Tasks"
            />
          </InputGroup>
          <Box width="100%">
            <Tasks />
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};
