const { response } = require("express");
const express = require("express");
const router = express.Router();
const Helpers=require('../helper/helper')



router.get('/',(req,res)=>{
res.render('home')
})
router.post("/", async (req, res) => {
   const amount=await Helpers.addAmount(req.body) 
   res.send(amount)
});


module.exports = router;
