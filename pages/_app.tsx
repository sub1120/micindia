import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat";
import customTheme from "@/theme/index";
import { AppPropsWithLayout } from "@/types";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={customTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
