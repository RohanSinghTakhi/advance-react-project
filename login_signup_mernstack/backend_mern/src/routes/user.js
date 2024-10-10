const express = require("express");
const router = express.Router();
const User = require("../models/user"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.post('/signin', async (req, res) => {
  try {
    const { email, Password } = req.body; 

    
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "yourSuperSecretKey",  
      { expiresIn: '1h' }
    );

    
    return res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        contactNumber: user.contactNumber
      },
      token
    });
  } catch (error) {
    console.error("Error during signin:", error); 
    return res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { name, email, Password, contactNumber } = req.body; 
    
    
    const userExists = await User.findOne({ email }).exec();
    if (userExists) {
      return res.status(400).json({ message: "User already registered" });
    }
    
    
    const hashedPassword = await bcrypt.hash(Password, 10);
    
    
    const newUser = new User({
      name,
      email,
      Password: hashedPassword, 
      contactNumber
    });
    
    
    const savedUser = await newUser.save();
    
    
    const token = jwt.sign(
      { id: savedUser._id, email: savedUser.email },
      "yourSuperSecretKey",  
      { expiresIn: '1h' }
    );

    
    return res.status(201).json({
      user: savedUser,
      token
    });
  } catch (error) {
    console.error("Error during signup:", error);  
    return res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

router.post

module.exports = router;
