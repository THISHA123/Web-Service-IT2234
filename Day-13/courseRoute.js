const express =require('express')
const router =express.Router()
const Course =require('../models/Course')



router.get('/', async (req,res)=>{
    try{
    
        const results =await Course.find()
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("sorry no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})

router.get('/:id', async (req,res)=>{
    try{
        const id =req.params.id 
        const results =await Course.findById(id)
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("sorry no data found!")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})


router.get('/code/:cid', async (req,res)=>{
    try{
        const cid = req.params.cid;
        const results = await Course.find({ code: cid });
        if(results.length > 0){
            res.status(200).json(results);
        } else {
            res.status(404).send("Sorry, no data found!");
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server error");
    }
})

router.post('/', async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        console.error(error);
        res.status(400).send("Failed to add course");
    }
});


module.exports=router