const express =require('express');
const app =express();
const port =3004;
const mongoose =require('mongoose')
const coursert=require('./routes/courseRoute')


app.use(express.json())
app.use('/course',coursert)
mongoose.connect('mongodb://localhost:27017/universityDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);

})