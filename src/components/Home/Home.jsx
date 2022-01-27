import React from "react";
import { ChooseNft, Features, Layout, Story } from "..";

const Home = () => {
  return (
    <Layout>
      <main>
        <ChooseNft />
        <Features />
        <Story />
      </main>
    </Layout>
  );
};

export default Home;
