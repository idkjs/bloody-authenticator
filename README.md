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

In `Index.re` use the binding as follows:

```reason
open BloodDemo;
ReactDOMRe.renderToElementWithId(<WrappedApp message="Thanks" />, "root");
```
