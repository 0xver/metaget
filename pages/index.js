import Head from "next/head"
import Search from "../components/interface/Search"

export default function Home() {
  return (
    <>
      <Head>
        <title>MetaGet</title>
        <meta name="MetaGet" content="Get NFT metadata" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Search />
    </>
  )
}
