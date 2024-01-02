import mongoose from 'mongoose';



async function connect(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection;
}
//mongodb+srv://leonardourbanavicius:<password>@cluster0.rbmobei.mongodb.net/?retryWrites=true&w=majority

export default connect;