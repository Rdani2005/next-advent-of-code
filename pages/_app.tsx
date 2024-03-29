import type { AppProps } from "next/app";
// import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "@/domain/app/themes";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            <Component {...pageProps} />;
        </ThemeProvider>
    );
}
