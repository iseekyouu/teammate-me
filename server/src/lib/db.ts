import mongoose from 'mongoose';
const uri = "mongodb+srv://root:root@cluster0.ozlmd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = mongoose.connect(uri);

export default client;

