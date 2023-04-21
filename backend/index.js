import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


mongoose.connect(
  "mongodb://127.0.0.1:27017/sales",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected Successfully");
  }
);

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  user_id: mongoose.Schema.ObjectId,
	is_delete: { type: Boolean, default: false },
	date : { type : Date, default: Date.now }

});


const User = new mongoose.model("User", userSchema);



app.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({email: email}, (err, user) => {
    if(user){
      if(password === user.password){
        res.send({message: "Login Successfull", user: user})
      }else {
        res.send({message: "Password Didn't matched." })
      }
    }else {
      res.send({message: "User Not Found!"})
    }
  })
});

app.post("/register", (req, res) => {
  const { fname, lname, email, password } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Registered" });
    } else {
      const user = new User({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      });

      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered!" });
        }
      });
    }
  });
});




// Product Add
var Schema = mongoose.Schema;

const productSchema = new Schema( {
	
  id:{ type:Number,
      unique: true,
      require:true,
      autoincreament: true,
  },
  pname: String,
  
	qty: Number,
	amt: Number,
	
	user_id: Schema.ObjectId,
	is_delete: { type: Boolean, default: false },
	date : { type : Date, default: Date.now }
})
const Product = mongoose.model('Product', productSchema);

app.post("/addproduct", (req, res) => {
  const {id, pname, qty, amt } = req.body;

  Product.findOne({ pname: pname }, (err, user) => {
    if (user) {
      res.send({ message: "Product Already Added" });
    } else {
      const product = new Product({
        id: id,
        pname: pname,
        qty: qty,
        amt: amt
      });

      product.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Product Successfully Added!" });
        }
      });
    }
  });
});


// Retrive Products

// Define API endpoint for retrieving products
app.get('/top-product', (req, res) => {
  // Retrieve products from database
  Product.find().sort({ amt: -1 }).limit(5)
    .then(products => res.send(products))
    .catch(err => console.log(err));
});



//total revenue
// Define API endpoint for retrieving total amount of all products
app.get('/revenue', (req, res) => {
  // Retrieve total amount of all products from database
  Product.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: "$amt" }
      }
    }
  ])
    .then(result => {
      res.send({ totalAmount: result[0].total });
    })
    .catch(err => console.log(err));
});

app.listen(9002, () => {
  console.log("app started on port 9002");
});
