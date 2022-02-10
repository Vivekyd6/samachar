//import { NewspaperRounded } from "@mui/icons-material";
import { data } from "./constants/data.js";
import News from "./Model/new.js";

const defaultData = async() => {
    try {
        await News.deleteMany();
      await  News.insertMany(data);
      console.log('Data imported Successfuly');
    } catch (error) {
        console.log('Error', error.message);
    }
}

export default defaultData;