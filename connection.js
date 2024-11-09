import mongoose from 'mongoose';

const connectDB = async (url) => {
    try{
        await mongoose.connect(url);
    }catch(e){
        console.error(`Database Connection Error : ${e}`);
    }
}

export default connectDB;