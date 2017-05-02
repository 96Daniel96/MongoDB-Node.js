//Establish the connection to MongoDB
var mongodb = require('mongodb');

//Create this inside your method/route
var MongoClient = mongodb.MongoClient;

//Connection String (take this from your MongoDB host)
var url = 'mongodb://<your_user_of_mongodb>:<your_password>@ds000000.mlab.com:23361/<your_db_name>';

MongoClient.connect(url, function(err, db){

  if(err){
    console.log("Failed Connection");
  }else{
    console.log("Connection Done!!");

    var collection = db.collection('<your_collection>');

    //This method will return a promise, so make sure you wait for the information to come before handle with data or will cause an error
    var i = collection.find({}).toArray();
    i.then(result => {
 
      //Now this is a normal array. Position 0 has the first element, to get the value of it u just need to specify the key
      console.log(result[0].your_key);
    });
  }
});


//Test this: open directory of this file and type: "node server.js"