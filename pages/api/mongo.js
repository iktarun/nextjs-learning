var MongoClient = require("mongodb").MongoClient;

export default function handler(req, res) {
  var uri = process.env.DB_URL;
  MongoClient.connect(uri, function (err, client) {
    if (err) {
      res.status(200).json({ name: "Mongo DB Connection was not succesfull" });
    }
    console.log("DB Connection was successfull!");
    const collection = client
      .db("sample_airbnb")
      .collection("listingsAndReviews");
    // perform actions on the collection object
    client.close();
    res.status(200).json({ name: "Mongo DB Connection was  succesfull" });
  });
}
