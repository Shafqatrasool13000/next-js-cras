import { NextPage } from "next";
import Link from "next/link";
import { ArticalType } from "./Types";
import axios from 'axios';
import Helmet from "./Helmet";


type ArticleType = {
  artical: ArticalType;
};
const ArticleItem: NextPage<ArticleType> = ({ artical }) => {
  <Helmet
        title={artical.title}
        metaName={"description"}
        metaContent={artical.title}
        favicon="/favicon.ico"
      />
  const { id, title, userId } = artical;
  return (
    <Link href="articals/[id]" as={`articals/${id}`}>
      <div className="artical-card">
        <h2>article item</h2>
        <h3>{id}</h3>
        <h5>{title}</h5>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;


