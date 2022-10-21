import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { BrowserRouter } from "react-router-dom";

export default function MyApp(
  {
    Component,
    pageProps: { session, ...pageProps } }
) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

