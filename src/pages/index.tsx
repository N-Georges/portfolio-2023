import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>NG - Portfolio</title>
        <meta name="description" content="Portfolio de Nodari Georges, développeur junior" />
      </Head>
      <Hero />
    </>
  );
}
