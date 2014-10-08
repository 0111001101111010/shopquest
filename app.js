var r = require('request');
var config = require('./config.json');

var opts = {
    headers: {
      "X-Yummly-App-ID": config.appid,
      "X-Yummly-App-Key": config.appkey
    }
};

r.get("http://api.yummly.com/v1/api/recipes", opts, function (err, res, body) {
      if (!err && res.statusCode === 200) {
        var info = JSON.parse(body);
        console.log(info);
    }
});
