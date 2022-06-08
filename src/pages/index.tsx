import {
  Box,
  Button,
  Flex,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormEvent, useContext, useState } from "react";
import { Input } from "../components/Input";
import { BiShow, BiHide } from "react-icons/bi";
import { AuthContext } from "../contexts/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { withSSRGuest } from "../utils/withSSRGuest";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Stack spacing={3} w={600} as="form" onSubmit={handleSubmit}>
        <Text
          align="center"
          mb="20"
          fontSize="70"
          color="teal"
          fontWeight="bold"
        >
          Login JWT
        </Text>
        <Input
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        <InputGroup>
          <Input
            label="Senha"
            type={show ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement mt="36px" mr="2">
            <Button colorScheme="teal" size="sm" onClick={handleClick}>
              {show ? <BiShow size={25} /> : <BiHide size={25} />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button colorScheme="teal" variant="solid" type="submit" width="50%">
            Login
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Home;

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
