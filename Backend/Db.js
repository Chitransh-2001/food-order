const mongoose = require('mongoose');

const MongoUri ="mongodb://shrivastavchitransh421:Chinu%402001@ac-pq33lyg-shard-00-00.l3czcwo.mongodb.net:27017,ac-pq33lyg-shard-00-01.l3czcwo.mongodb.net:27017,ac-pq33lyg-shard-00-02.l3czcwo.mongodb.net:27017/shrivastavchitransh421?replicaSet=atlas-suwc44-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
const connectToDatabase = async () => {
    try {
        await mongoose.connect(MongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        const fetchedData = mongoose.connection.db.collection("FoodData");
        const data = await fetchedData.find({}).toArray();
        const FoodCategory= mongoose.connection.db.collection("FoodCate");
        const catData = await FoodCategory.find({}).toArray();
        //if (data.length === 0) {
           // console.log("No data found in the FoodData collection.");
       // }
      
        
           global.fooddata= data;
           global.foodcat = catData;
           
        
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

module.exports = connectToDatabase;
