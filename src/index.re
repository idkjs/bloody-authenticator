[%bs.raw {|require('./index.css')|}];

[@bs.module "./serviceWorker"]
external register_service_worker: unit => unit = "register";

[@bs.module "./serviceWorker"]
external unregister_service_worker: unit => unit = "unregister";
Amplify.configure();
Amplify.getToken;

// open BloodyOwlDemo;
open GlennslDemo;
ReactDOMRe.renderToElementWithId(<WrappedApp message="Thanks" />, "root");
