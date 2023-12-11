const mongoose = require('mongoose');

const uri =
  'mongodb+srv://admin:admin@archit.cggjo1p.mongodb.net/e-comm?retryWrites=true&w=majority';
const database = 'e-comm';

async function dbConnect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    // Check if the connection is successful
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

    const ProductSchema = mongoose.model('Product', new mongoose.Schema({
      // Define your product schema here
      name: String,
      price : Number,
    }));
    return ProductSchema
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = dbConnect;
