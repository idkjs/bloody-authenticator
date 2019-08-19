[%bs.raw {|require('./index.css')|}];

[@bs.module "./serviceWorker"]
external register_service_worker: unit => unit = "register";

[@bs.module "./serviceWorker"]
external unregister_service_worker: unit => unit = "unregister";
Amplify.configure();
Amplify.getToken;

open BloodyOwlDemo;
ReactDOMRe.renderToElementWithId(<WrappedApp message="Thanks" />, "root");

// open GlennslDemo;
// ReactDOMRe.renderToElementWithId(<WrappedApp message="Thanks" />, "root");

// Bonus: Functor Demo from https://bloodyowl.github.io/blog/2019-01-23-generating-reason-react-components-with-functors/
// open BloodyFunctorDemo;
// ReactDOMRe.renderToElementWithId(<IntValue value=2 />, "root");