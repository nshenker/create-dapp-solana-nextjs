import type { NextPage } from "next";
import Head from "next/head";
import { GallerView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NFHustle</title>
        <meta
          name="description"
          content="This site will fly high 🦤"
        />
      </Head>
      <GalleryView />
    </div>
  );
};

export default Home;
