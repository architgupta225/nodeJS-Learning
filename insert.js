const dbConnect = require("./mongoDb");

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany([
        {
            name: "galaxy 4",
            brand : "samsung",
            price : 150,
            category : "mobile",
        },
        {
            name: "fold 4",
            brand : "samsung",
            price : 300,
            category : "mobile",
        }
    ])
}

insert();

