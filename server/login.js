const express=require("express")
const router=express.Router()
const bodyParser=require("body-parser")
const encoder=bodyParser.json()
router.use(bodyParser.urlencoded({ extended: false }));
const mongoose=require("mongoose")
// const bcrypt=require("bcrypt")

const User = mongoose.model('User', {
    username: String,
    password: String,
  });

  router.post('/', async (req, res) => {
    try {
      const { username, password } = req.body;
      // const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password });
      console.log(req.body.email,user,"username and password")
      // await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
router.get((req,res)=>{

})




module.exports=router;