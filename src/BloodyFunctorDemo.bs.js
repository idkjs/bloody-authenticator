'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_chrome_debugger = require("bs-platform/lib/js/caml_chrome_debugger.js");

function Make(Param) {
  var BloodyFunctorDemo$Make = function (Props) {
    var value = Props.value;
    var match = React.useState((function () {
            return value;
          }));
    return React.createElement("div", {
                style: {
                  fontSize: "32px"
                }
              }, Curry._1(Param[/* render */1], match[0]));
  };
  return /* module */Caml_chrome_debugger.localModule(["make"], [BloodyFunctorDemo$Make]);
}

function BloodyFunctorDemo$Make(Props) {
  var value = Props.value;
  var match = React.useState((function () {
          return value;
        }));
  return React.createElement("div", {
              style: {
                fontSize: "32px"
              }
            }, String(match[0]));
}

var IntValue = /* module */Caml_chrome_debugger.localModule(["make"], [BloodyFunctorDemo$Make]);

exports.Make = Make;
exports.IntValue = IntValue;
/* react Not a pure module */
