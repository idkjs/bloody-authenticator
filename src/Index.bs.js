'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ServiceWorker = require("./serviceWorker");
var Amplify$ReactHooksTemplate = require("./aws/Amplify.bs.js");
var BloodyOwlDemo$ReactHooksTemplate = require("./BloodyOwlDemo.bs.js");

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

ReactDOMRe.renderToElementWithId(React.createElement(BloodyOwlDemo$ReactHooksTemplate.WrappedApp[/* make */0], {
          message: "Thanks"
        }), "root");

exports.register_service_worker = register_service_worker;
exports.unregister_service_worker = unregister_service_worker;
/*  Not a pure module */
