const express=require("express")
const router =express.router()
router.get('/')



router.get('/',function(req,res){
  res.sendFile(path.join(__dirname,"note.html"))
  })
  
  router.get('/notes',function(req,res){
    res.sendFile(path.join(__dirname,"index.html"))



    module.exports=router
  
  })
  