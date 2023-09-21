import React from 'react'
import { useEffect, useState } from 'react';
import {Box} from '@mui/material';

import { getNews} from '../../service/Api'


// components
  import Article from './Article';

const Articles = () => {

  const [news, setNews ] = useState([]);

    useEffect(() => {
       dailyNews();
    }, []);

    const dailyNews = async () => {
       let response =  await getNews();
      // console.log(response);
       setNews(response.data)
    }

  return (
<>
<Box>


{ news . map ( data => (
   <Article data={data} />

  
))
}


</Box>
  

 
 
  
  
</>

  )
}

export default Articles;