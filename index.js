const dbConnect = require('./mongoose.js')

const main = async () => {
    const db = await dbConnect();
    let data = new db({name: "m8"});
    const result = await data.save()
    console.log("🚀 ~ file: index.js:7 ~ main ~ result:", result)
}

main()