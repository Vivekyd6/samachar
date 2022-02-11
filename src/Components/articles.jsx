import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
//import { Box } from '@material-ui/core';
import { getNews } from './service/api';
import Article from './article';

const Articles = () => {
   const [news, setNews] = useState([]);
   const [page,setPage]=useState(0);
   useEffect(() => {
      dailyNews();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page])

   const dailyNews = async () => {
      let response= await getNews(page);
      setNews([...news, ...response.data]);
      
   }
   return (
      <InfiniteScroll dataLength={news.length}
         next={() => setPage(page => page + 1)}
         hasMore={true}
      >
      {
       news?.length>0  && news.map(article=>(
         <Article article={article} />
         ))}
      </InfiniteScroll>
        
   )
}
export default Articles;