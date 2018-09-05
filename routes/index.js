var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function (req, res, next) {

  var callapi = function () {
    var updated = []
    var url = 'https://jsonplaceholder.typicode.com/photos';

    axios.get(url)
      .then(function (response) {
        updated = response.data
        a = Math.floor((Math.random() * updated.length) + 1);
        console.log(a);
        quote = updated[a].title;
        res.render('index', { title: quote });
      })
      .catch(function (error) {
        res.render('error',{message : "OOPS! Something's not right. \n  Check the API and try again."});
      })

  }();
});

module.exports = router;
