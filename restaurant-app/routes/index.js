const express = require('express');
const router = express.Router();

// Do work here
router.use(timelog = (req,res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// request is the object with the data coming in
// the response is the object with methods for sending data back to user
router.get('/', (req, res) => {
  const tom = {age: 23, name: 'Tom'};
  // res.send('Hey! It works!'); // can never send data twice in one call
  // res.json(tom)
  res.render('hello' , {
    name: 'tom',
    dogs: req.query.dogs,
    title: 'OYE!' // hello extends layout, which string interpolates a title property
  })
  
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('')
  res.send(reverse)
})




module.exports = router;
