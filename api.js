const express = require('express');
require('./config.js');
const Product = require('./product.js');

const app = express();

app.use(express.json());

app.post('/create', async (req, res) => {
    let data = new Product(req.body)
    let result = await data.save();
    console.log("🚀 ~ file: api.js:12 ~ app.post ~ result:", result)
    res.send('done')
})

app.get('/list', async (req, res) => {
    let data = await Product.find();
    res.send(data)
})


app.delete('/delete/:_id', async (req, res) => {
    let data = await Product.deleteOne(req.params);
    res.send(data)
})

app.put('/update/:_id', async (req, res) => {
    let data = await Product.updateOne(
        req.params, { $set: req.body });
    res.send(data)
})


app.listen(5000)