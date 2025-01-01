// pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/system";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <NextUIProvider>
                    <Component {...pageProps} />
            </NextUIProvider>
        </ThemeProvider>
    );
}
