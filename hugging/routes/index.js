var express = require('express');
var router = express.Router();
const hf = require('huggingface-api')

router.get('/fetch/text', function (req, res, next) {
  console.log('working.....')
  hf.request({
    text: 'My name is Julien and I like to',
    model: 'EleutherAI/gpt-neo-2.7B',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample : true,
    min_length : 50,
    return_type: 'STRING'
  }).then((data) => {
    console.log(data)
    return res.send(data)
  })
});

module.exports = router;