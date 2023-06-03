const mongoose = require("mongoose");
//"mongodb+srv://abcd:abc123@@@ @cluster0.gbio2i0.mongodb.net/?retryWrites=true&w=majority/onetom"
//mongodb://localhost:27017/onetom
mongoose
  .connect(
    "mongodb+srv://abdullahsalmanmardan:fiZGCLTe35S4Ezs3@cluster0.rqaemsv.mongodb.net/lamaShoppingmern?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connnection is succesfull");
  })
  .catch(() => {
    console.log("error in connection");
  });
