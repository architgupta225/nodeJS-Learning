const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://admin:admin@archit.cggjo1p.mongodb.net/?retryWrites=true&w=majority";
const database = "e-comm";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function dbConnect() {
  try {
    await client.connect();
    // await client.db("admin").command({ ping: 1 });
    let db = client.db(database);
    return db.collection("products");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

module.exports = dbConnect;
