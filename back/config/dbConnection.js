const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected Successfully`);
  } catch (err) {
    console.error(err.message);
    console.log("Error connecting to database");
    process.exit(1);
  }
};

module.exports = connectDb;
