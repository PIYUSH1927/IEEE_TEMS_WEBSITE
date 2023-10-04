const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();
const path = require('path');


app.use(express.static('public'));
 
app.use(bodyParser.urlencoded({ extended:true }));

const DB = 'mongodb+srv://padiapiyush12:newpassword12@cluster0.jhxrht3.mongodb.net/contactdata?retryWrites=true&w=majority'


mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log(`connection successful`);
}).catch((err)=>console.log(`no connection`));


const db = mongoose.connection;

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.get('/contributors', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'contributors.html'));
});

function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }
  
  function isValidMobileNumber(mobile) {
    const mobileRegex = /^[6789]\d{9}$/;
    return mobileRegex.test(mobile);
  }

const userSchema2 = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    message:String,
  });
  
  
  
const UserN = mongoose.model('UserN', userSchema2);


app.post('/index', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mobile = req.body.mobile;

    if (!isValidEmail(email)) {
        return res.status(400).send('Invalid email address');
      }
    
      if (!isValidMobileNumber(mobile)) {
        return res.status(400).send('Invalid mobile number');
      }

    const newUser = new UserN({
      name,
      email,
      mobile,
      message
    });

    try {
      await newUser.save();
      res.sendFile(path.join(__dirname, 'views', 'home.html'));
      alert("Your response have been recorded");
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving data to the database');
    }
});


app.listen(process.env.PORT || 2000, function() {
  console.log("Server has started successfully");
});