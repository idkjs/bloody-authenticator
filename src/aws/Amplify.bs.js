'use strict';

var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var AwsAmplify = require("aws-amplify");
var AwsExportsJs = require("../aws-exports.js");
var Caml_chrome_debugger = require("bs-platform/lib/js/caml_chrome_debugger.js");

var awsConfig = AwsExportsJs.default;

AwsAmplify.default.configure(awsConfig);

var Configure = /* module */Caml_chrome_debugger.localModule([
    "awsConfig",
    "configure"
  ], [
    awsConfig,
    0
  ]);

function configure(param) {
  return /* () */0;
}

var getToken = AwsAmplify.Auth.currentAuthenticatedUser().then((function (res) {
        var jwtToken = Belt_Option.getWithDefault(Belt_Option.flatMap(res.signInUserSession, (function (signInUserSession) {
                    return signInUserSession.idToken;
                  })), "NO_CURRENT_USER");
        console.log("RES: ", res);
        console.log("RES##signInUserSession: ", res.signInUserSession);
        console.log("jwtToken: ", jwtToken);
        return Promise.resolve(jwtToken);
      }));

exports.Configure = Configure;
exports.configure = configure;
exports.getToken = getToken;
/* awsConfig Not a pure module */
