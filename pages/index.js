import Head from "next/head"
import Search from "../components/interface/Search"

export default function Home() {
  return (
    <>
      <Head>
        <title>MetaGet</title>
        <meta name="author" content="Sam Larsen" />
        <meta name="description" content="Get NFT metadata from the blockchain" />
        <meta name="keywords" content="metaget, metadata, nft, blockchain" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Search />
    </>
  )
}
