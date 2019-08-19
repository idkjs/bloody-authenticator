# Binding To `withAuthenticator` in `aws-amplify-react`

see:<https://stackoverflow.com/questions/57548611/reasonml-binding-to-higher-order-functions/57561307#57561307>

```reason
[@bs.module "aws-amplify-react"]
external withAuthenticator:
  // takes a react component and returns a react component with the same signature
  (React.component('props), bool) => React.component('props) =
  "withAuthenticator";

module App = {
  [@react.component]
  let make = (~message) => <div> message->React.string </div>;
};

module WrappedApp = {
  include App;
  let make = withAuthenticator(make,true);
};

```

In `index.re` use the binding as follows:

```reason
open BloodDemo;
ReactDOMRe.renderToElementWithId(<WrappedApp message="Thanks" />, "root");
```

## Note

If you dont use `include App` in `WrappedApp` and instead call `App.make` directly, like this:

```reason
module WrappedApp = {
  // include App;
  let make = withAuthenticator(App.make,true);
};
```

You will get this error:

```bsh
>>>> Start compiling
[1/1] Building src/index-ReactHooksTemplate.cmj

  We've found a bug for you!
  /Users/prisc_000/working/DEMOS/bloody-authenticator/src/index.re 12:35-44

  10 │
  11 │ open BloodDemo;
  12 │ ReactDOMRe.renderToElementWithId(<WrappedApp message="Thanks" />, "roo
       t");

  The value makeProps can't be found in WrappedApp

>>>> Finish compiling(exit: 1)
```

`include App` copies over app to the `WrappedApp` module which has some affect that I need to study.

[`include` in docs](https://reasonml.github.io/docs/en/module#extending-modules)

## Reproducing This App

This is App is the demo from the AwsAmplify docs found here: <https://aws-amplify.github.io/docs/js/react.>

Then add run `yarn add bs-platform -D` and `yarn add reason-react reason-scripts`. Also run `touch index.re` and do your `amplify configure` work here as you have it in the js version. There is a binding in this repo for it at [`./src/aws/Amplify.re`]('./src/aws/Amplify.re').

Then `touch bsconfig.json` and add following to it.

```json
{
  "name": "react-hooks-template",
  "reason": {
    "react-jsx": 3
  },
  "sources": {
    "dir" : "src",
    "subdirs" : true
  },
  "package-specs": [{
    "module": "commonjs",
    "in-source": true
  }],
  "suffix": ".bs.js",
  "namespace": true,
  "bs-dependencies": [
    "reason-react"
  ],
  "gentypeconfig": {
    "language": "untyped",
    "module": "es6",
    "importPath": "relative",
    "reasonReactPath": "reason-react/src/ReasonReact.js",
    "exportInterfaces": false,
    "shims": {},
    "debug": {
      "all": false,
      "basic": false
    }
  },
  "refmt": 3
}
```

Show me the [code](https://github.com/idkjs/bloody-authenticator).
