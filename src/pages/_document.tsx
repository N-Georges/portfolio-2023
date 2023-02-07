import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon_2.ico" />
        <meta name="title" property="og:title" content="Nodari Georges - Portfolio" />
        <meta
          name="image"
          property="og:image"
          content="https://ngeorges.vercel.app/_next/image?url=%2Fog.webp&w=1080&q=75"
        />
        <meta
          name="description"
          property="og:description"
          content="Portfolio de Nodari Georges, développeur web"
        />
        <meta name="url" property="og:url" content="https://ngeorges.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_ndi_georges" />
        <meta name="twitter:creator" content="@_ndi_georges" />
        <meta name="twitter:title" content="Nodari Georges - Portfolio"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ngeorges.vercel.app" />
        <meta property="twitter:url" content="https://ngeorges.vercel.app" />
        <meta name="twitter:title" content="NG - Portfolio" />
        <meta name="twitter:description" content="Portfolio de Nodari Georges, développeur web" />
        <meta name="twitter:image" content="/og.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
