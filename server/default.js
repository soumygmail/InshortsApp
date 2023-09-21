import News from "./model/news.js"

import { data} from "./constraints/data.js"



// to insert the data of the data file
const DefaultData = async () => {
    try{
    //await News.save({data})
       await News.insertMany(data);
       console.log("Data connected sucessfully")
    }catch (error) {
        console.log(`Error` , error.message);
    }
}

export default DefaultData;