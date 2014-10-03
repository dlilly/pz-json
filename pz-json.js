var request = require('request');

exports.respond = function(res, response, content_type) {
  res.writeHead(200, {'Content-Type': content_type || "text/plain"});
  res.end(response);
}

// exports.json = function(host, path, auth, callback) {
//   var options = {
//     hostname  : host,
//     port      : 80,
//     path      : path,
//     auth      : auth
//   };

//   var req = http.get(options, function(res) {
//     var data = "";
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//       data = data + chunk;
//     });
//     res.on('end', function() {
//       callback(JSON.parse(data));
//     });
//   });

//   req.on('error', function(e) {
//     console.log('problem with request: ' + e.message);
//   });
// }

exports.json = function(url, callback) {
  request(url, function(err, res, body) {
    if (err) callback(err);
    else callback(null, JSON.parse(body));
  })
}

// exports.audit = function(action, contact) {
//   DB.insert("audit", {table: "audit", data: {action: action, contact: contact}});
// }

exports.logJSON = function(json) { console.log(JSON.stringify(json, "", 4)); }