var express = require('express');
var router = express.Router();
var request = require('request')
const hf = require('huggingface-api')

router.get('/fetch/text', async function (req, res, next) {
  // console.log('working.....')
  let data, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13 = '';
  data = await hf.request({
    text: 'my name is test and i am',
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences = data.split(/[.,\n]/);
  console.log(sentences)
  data2 = await hf.request({
    text: sentences[sentences.length - 1],
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences1 = data2.split(/[.,\n]/);
  console.log(sentences1)
  console.log(1)
  data3 = await hf.request({
    text: sentences[sentences.length - 1],
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences2 = data3.split(/[.,\n]/);
  console.log(sentences2[sentences2.length - 1])
  data4 = await hf.request({
    text: sentences2[sentences2.length - 1],
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences3 = data4.split(/[.,\n]/);
  console.log(sentences3)
  console.log(2)
  data5 = await hf.request({
    text: sentences3[sentences3.length - 1],
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences4 = data5.split(/[.,\n]/);
  console.log(sentences4)
  console.log(4)
  data6 = await hf.request({
    text: sentences4[sentences4.length - 1] || "It's about finding people who are really good at what",
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences5 = data6.split(/[.,\n]/);
  console.log(sentences5[sentences5.length - 1] )
  console.log(5)
  data7 = await hf.request({
    text: sentences5[sentences5.length - 1] || ' the customer is the company" "When people stop',
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences6 = data7.split(/[.,\n]/);
  console.log(sentences6)
  data8 = await hf.request({
    text: sentences6[sentences6.length - 1] ||  "You're a very",
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences7 = data8.split(/[.,\n]/);
  console.log(sentences7)
  console.log(7)
  data9 = await hf.request({
    text: sentences7[sentences7.length - 1] || 'I thought so too',
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences8 = data9.split(/[.,\n]/);
  console.log(sentences8)
  data10 = await hf.request({
    text: sentences8[sentences8.length - 1] ||  'I was just sitting',
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences9 = data10.split(/[.,\n']/);
  console.log(sentences9[sentences9.length - 1])
  console.log(9)
  data11 = await hf.request({
    text: sentences9[sentences9.length - 1] ||  "And then we sat down to do a",
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences10 = data11.split(/[.,\n]/);
  console.log(sentences10)
  data12 = await hf.request({
    text: sentences10[sentences10.length - 1],
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  let sentences11 = data12.split(/[.\n]/);
  console.log(sentences11)
  data13 = await hf.request({
    text: sentences11[sentences11.length - 1],
    model: 'gpt2-large',
    api_key: 'api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
    do_sample: true,
    no_repeat_ngram_size: 2,
    min_length: 400,
    return_type: 'STRING'
  });
  console.log(data)
  console.log('**************8')
  console.log(data2)
  let result = data + ' ' + data2 + ' ' + data3 + ' ' + data4 + ' ' + data5 + ' ' + data6 + ' ' + data7 + ' ' + data8 + ' ' + data9 + ' ' + data10 + ' ' + data11 + ' ' + data12 + ' ' + data13
  return res.send(result)

});


router.post('/test', (req, res) => {
  request({
      uri: "https://api-inference.huggingface.co/models/gpt2",
      headers: {
        Authorization: 'Bearer api_cycLgWeOxxoGkZWumvWKPGwzuiWproQSSg',
      },
      data: 'my name is bilal'

    },
    function (error, response, body) {
      console.log(body)
      res.send(body)
    })
})

module.exports = router;