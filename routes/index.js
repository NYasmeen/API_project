var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {

 var callapi = function() {
    var updated = []
    
    var url = 'https://jsonplaceholder.typicode.com/photos';
    
    axios.get(url)
      .then(function (response) {
        // console.log(response.data);
        updated = response.data
        a=Math.floor((Math.random() * updated.length) + 1);
        console.log(a);
        quote =  updated[a].title;
        res.render('index', { title: quote});
         
        // for(let a = 0; a < updated.length; a++){
           
        // }
      })
      .catch(function (error) {
        console.log(error);
      })

}();
});

router.post('/', function(req, res, next) {

});


module.exports = router;
