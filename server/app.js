const express = require('express');
const app=express();
const morgan= require('morgan');
const path=require('path');
const {db} = require('./db')

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api', require('./api'))

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
    // res.send('yo yo yo up in the home');
})


app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      res.status(404).end()
    } else {
      next()
    }
  })

app.use((err, req, res, next) => {
console.error(err, typeof next)
console.error(err.stack)
res.status(err.status || 500).send(err.message || 'Internal server error.')
})


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})