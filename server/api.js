const router = require('express').Router();
const {Table}= require('./db');


router.get('/',async(req,res,next)=>{
    try{
        const allData = await Table.findAll();
        res.json(allData);
    }
    catch(error){
        next(error);
    }
});

router.get('/latest',async(req,res,next)=>{
    try{
        const latest = await Table.findAll({
            limit:1,
            order:[['createdAt','DESC']]
        });
        res.json(latest);
    }
    catch(error){
        next(error);
    }
})

router.get('/search?', async(req,res,next)=>{
    try{
       let query = req.query.name;
       console.log(query);
       const find = await Table.findOne({where:{name:query}});
        res.json(find);
    }
    catch(error){
        next(error);
    }
})

router.get('/:id', async(req,res,next)=>{
    try{
        const current = await Table.findOne({where:{id:req.params.id}});
        if(!current){
            res.status(404);
            next();
        }
        else{
            res.json(current);
        }
    }
    catch(error){
        next(error);
    }
})


module.exports=router;