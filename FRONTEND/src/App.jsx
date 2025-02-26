import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Box>
        <NavBar />
      </Box>
      <Box flex="1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
      <Box>{/* <Footer /> */}</Box>
    </Flex>
  );
};

export default App;
