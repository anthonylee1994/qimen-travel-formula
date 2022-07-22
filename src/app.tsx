import React from "react";
import {ChakraProvider} from "@chakra-ui/react";

export const App = React.memo(() => {
    return <ChakraProvider></ChakraProvider>;
});
