import mongoose from 'mongoose';

const DBConnection = async () =>{
    const MONODB_URI = `mongodb://surajpp:angnkN33Dev3KZKw@ac-boy8vw1-shard-00-00.p1pvvzs.mongodb.net:27017,ac-boy8vw1-shard-00-01.p1pvvzs.mongodb.net:27017,ac-boy8vw1-shard-00-02.p1pvvzs.mongodb.net:27017/?ssl=true&replicaSet=atlas-o0xf9j-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connection with the database ', error.message);
    }
}

export default DBConnection;