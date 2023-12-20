import { BalanceProvider } from "@/Context/BalanceContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BalanceProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Vending Machine Duplicate." />
        <meta name="Vending Machine" content="Vending Machine" />
        <link
          rel="icon"
          href="https://ik.imagekit.io/75bfsfl5j/v-machine_strukdis/vending.jpeg?updatedAt=1703075949352"
        />
        <title>Ben & Lou Mart</title>
      </Head>
      <Component {...pageProps} />
    </BalanceProvider>
  );
}
