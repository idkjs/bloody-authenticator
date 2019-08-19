'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ServiceWorker = require("./serviceWorker");
var Amplify$ReactHooksTemplate = require("./aws/Amplify.bs.js");
var GlennslDemo$ReactHooksTemplate = require("./GlennslDemo.bs.js");

((require('./index.css')));

function register_service_worker(prim) {
  ServiceWorker.register();
  return /* () */0;
}

function unregister_service_worker(prim) {
  ServiceWorker.unregister();
  return /* () */0;
}

Amplify$ReactHooksTemplate.configure(/* () */0);

ReactDOMRe.renderToElementWithId(React.createElement(GlennslDemo$ReactHooksTemplate.WrappedApp[/* make */1], GlennslDemo$ReactHooksTemplate.WrappedApp[/* makeProps */0]("Thanks", undefined, /* () */0)), "root");

exports.register_service_worker = register_service_worker;
exports.unregister_service_worker = unregister_service_worker;
/*  Not a pure module */
