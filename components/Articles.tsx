import { NextPage } from "next";
import ArticleItem from "./ArticleItem";
import { ArticalsType } from "./Types";

const Articles: NextPage<ArticalsType> = ({ articals }) => {
  return (
    <div>
      <h5>Articles of Month</h5>
      {articals?.map((article, index) => (
        <ArticleItem key={index} artical={article} />
      ))}
    </div>
  );
};

export default Articles;
