const mongoose = require('mongoose');
const uri =
    'mongodb+srv://admin:admin@archit.cggjo1p.mongodb.net/e-comm?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});