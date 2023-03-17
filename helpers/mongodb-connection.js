const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const mongoAtlasUri = process.env.MONGO_URI
const mongoAtlasUri =
  "mongodb+srv://KapilMundada:Kapil123@atlascluster.beoc0fg.mongodb.net/?retryWrites=true&w=majority";

const mongooseConnection = async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.set("strictQuery", false);
    await mongoose.connect(mongoAtlasUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log("could not connect: " + e);
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
};
module.exports = mongooseConnection;
