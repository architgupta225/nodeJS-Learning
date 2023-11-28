const dbConnect = require("./mongoDb.js");

const main = async () => {
  try {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
  } catch {
    console.log("something went wrong");
  }
};

main();
