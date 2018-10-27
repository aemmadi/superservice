var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var toneAnalyzer = new ToneAnalyzerV3({
  version_date: '2018-10-17',
  username: '006548a4-ed3f-4bf0-9a38-71e8e0fc8acb',
  password: 'zDzpHtFNpvUg',
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
});


var text = 'Hi Team,The times are difficult! Our sales have been disappointing for the past three quarters for our data analytics product suite. However, we are not doing a good job at selling it, and this is really frustrating.';
var params = {
  'tone_input': {'text': text},
  'content_type': 'application/json'
};

toneAnalyzer.tone(params, function (error, response){
  if (error)
    console.log('error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
});

0;
