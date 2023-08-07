import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script defer src="/tradingview/charting_library/charting_library.standalone.js" />
        <script defer src="/tradingview/datafeeds/udf/dist/bundle.js" />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.4/socket.io.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
