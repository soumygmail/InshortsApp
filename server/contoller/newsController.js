
import News from '../model/news.js'



// logic of the file...
export const getNews = async(req, res) => {
    
    try{
   let data =  await News.find({});
   res.status(200).json(data);
    }catch (er){
    
    }
}