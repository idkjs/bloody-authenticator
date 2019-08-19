'use strict';

var React = require("react");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var AwsAmplifyReact = require("aws-amplify-react");
var Caml_chrome_debugger = require("bs-platform/lib/js/caml_chrome_debugger.js");

function GlennslDemo$App(Props) {
  var message = Props.message;
  return React.createElement("div", undefined, message);
}

var App = /* module */Caml_chrome_debugger.localModule(["make"], [GlennslDemo$App]);

function makeProps(prim, prim$1, prim$2) {
  var tmp = {
    message: prim
  };
  if (prim$1 !== undefined) {
    tmp.key = Caml_option.valFromOption(prim$1);
  }
  return tmp;
}

var make = AwsAmplifyReact.withAuthenticator(GlennslDemo$App, true);

var WrappedApp = /* module */Caml_chrome_debugger.localModule([
    "makeProps",
    "make"
  ], [
    makeProps,
    make
  ]);

exports.App = App;
exports.WrappedApp = WrappedApp;
/* make Not a pure module */
