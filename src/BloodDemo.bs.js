'use strict';

var React = require("react");
var AwsAmplifyReact = require("aws-amplify-react");
var Caml_chrome_debugger = require("bs-platform/lib/js/caml_chrome_debugger.js");

function BloodDemo$App(Props) {
  var message = Props.message;
  return React.createElement("div", undefined, message);
}

var App = /* module */Caml_chrome_debugger.localModule(["make"], [BloodDemo$App]);

var make = AwsAmplifyReact.withAuthenticator(BloodDemo$App, true);

var WrappedApp = /* module */Caml_chrome_debugger.localModule(["make"], [make]);

exports.App = App;
exports.WrappedApp = WrappedApp;
/* make Not a pure module */
