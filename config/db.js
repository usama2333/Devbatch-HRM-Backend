const { mongoose } = require("mongoose");

const db = mongoose
  .connect(
     "mongodb+srv://admin:TyHgdQMF3iAPnG8D@cluster0.crjryvt.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0",

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err, "Failed To Connect to the Database ");
  });
module.exports = db;
