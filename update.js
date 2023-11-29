const dbConnect = require("./mongoDb");

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: 'galaxy 4' }, { $set: { name: 'max 6'} }
    )
    console.log("🚀 ~ file: update.js:8 ~ updateData ~ result:", result)
}

updateData();