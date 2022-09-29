import type { NextPage } from "next";
import Head from "next/head";
import Helmet from "../components/Helmet";
import { ArticalsType} from "../components/Types";
import Articles from "../components/Articles";


const Home: NextPage<ArticalsType> = () => {
  
  return (
    <div>
     
      <Helmet
        title="Homepage"
        metaName="description"
        metaContent="development,practice react"
        favicon="/favicon.ico"
      />
      <h2>Hello Next App</h2>
    </div>
  );
};

export default Home;


