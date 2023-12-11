const dbConnect = require('./mongoose.js')

const saveInDB = async () => {
    const db = await dbConnect();
    let data = new db({ name: "hello", price: 300 });
    const result = await data.save()
    console.log("🚀 ~ file: index.js:7 ~ main ~ result:", result)
}

const updateInDB = async () => {
    const db = await dbConnect();
    let data = await db.updateOne({ name: "m8" }, {
        $set: { price: 350 }
    })
    console.log("🚀 ~ file: index.js:15 ~ updateInDB ~ data:", data)
}

const deleteInDB = async () => {
    const db = await dbConnect();
    let data = await db.deleteOne({name : "m8"})
    console.log("🚀 ~ file: index.js:21 ~ deleteInDB ~ data:", data)
}

const findInDB = async () => {
    const db = await dbConnect();
    let data = await db.find();
    console.log("🚀 ~ file: index.js:27 ~ findInDB ~ data:", data)
    
}

saveInDB();