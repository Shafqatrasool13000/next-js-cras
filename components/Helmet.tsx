import Head from "next/head";
import { HelmetTypes } from "./Types";

const Helmet: React.FC<HelmetTypes> = ({
  title,
  metaName,
  metaContent,
  favicon,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={metaName} content={metaContent} />
      <link rel="icon" href={favicon} />
    </Head>
  );
};

export default Helmet;
