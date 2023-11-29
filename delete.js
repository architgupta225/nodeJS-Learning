const dbConnect = require("./mongoDb");

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteOne({name : 'max 6'})
}

deleteData();