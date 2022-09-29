import axios from 'axios';
import Helmet from '../../../components/Helmet';
import { server } from '../../../config';


const article = ({artical}:any) => {
  console.log(artical)
  
  // const { id } = router.query;
  return <div>
     <Helmet
        title={artical.title}
        metaName={"description"}
        metaContent={artical.title}
        favicon="/favicon.ico"
      />
  <h2> {artical.title}</h2> 
   <h3>{artical.body}</h3> 
     </div>;
};

export default article;

export const getStaticProps = async (context:any) => {
  const {data}=await axios.get(`${server}/api/articles/${context.params.id}`);

  return {
   props:{
       artical:data
   }
  }
};

export const getStaticPaths = async () => {
  const {data}=await axios.get(`${server}/api/articles`);

  const ids=data.map((article:any)=>article.id);
  const paths=ids.map((id:any)=>({params:{id:id.toString()}}))
  console.log({paths});

  return {
   paths,
   fallback:false
  }
};
