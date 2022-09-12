import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NFT Gallery!</title>
        <meta name="description" content="Augie's Gallery" />
      </Head>
      <GalleryView />
    </div>
  );
};

export default Home;
