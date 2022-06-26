import type { AppProps } from 'next/app'
import Script from 'next/script'

import { ThemeProvider } from 'next-themes'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} />
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2SJPH84SZN"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2SJPH84SZN');
            `,
        }}
      />
    </ThemeProvider>
  )
}

export default MyApp
