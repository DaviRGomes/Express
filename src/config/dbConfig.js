import mongoose, {mongo} from "mongoose";


const password = process.env.password;
async function conectNaDatabase(){
    mongoose.connect(process.env.password);
    return mongoose.connection;
}

export default conectNaDatabase;

