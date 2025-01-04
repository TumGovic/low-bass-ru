// pages/_app.tsx

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/system";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Low-Bass</title>
                <link rel="icon" type="image/png" href="https://r2.low-bass.ru/logo.png"/>
                <meta name="description" content="Профессиональная Low Bass обработка треков для сабвуферов. Старые треки заиграют по новому! Доступные цены, быстрые сроки, гарантия качества. Заходи и прокачай свой звук!"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <ThemeProvider>
                <NextUIProvider>
                <Component {...pageProps} />
                </NextUIProvider>
            </ThemeProvider>
        </>
    );
}
