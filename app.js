var r = require('request');
var config = require('./config.json');

var url = "http://api.yummly.com/v1" + "_app_id=" + config.appid +"& _app_key="+ config.appkey;
r.get(url, function (err, res, body) {
      if (!err && res.statusCode === 200) {
        var info = JSON.parse(body);
        console.log(info);
    }
    console.log(body);
});
