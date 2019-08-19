[@bs.module "aws-amplify-react"]
external withAuthenticator:
  // takes a react component and returns a react component with the same signature
  (React.component('props), bool) => React.component('props) =
  "withAuthenticator";

module App = {
  [@react.component]
  let make = (~message) => <div> message->React.string </div>;
};
/*
it's basically the same, except instead of include App; you would define let makeProps manually, as if you were importing the component from js. Or if `WrappedApp` should have the exact same props as App, you could also just alias `makeProps` from `App`: `let makeProps = App.makeProps;`. That's exactly what `include App`; does as well, except it also includes everything else in `App`

Below is what @glennsl is suggesting.
*/
module WrappedApp = {
  let makeProps = App.makeProps;
  let make = withAuthenticator(App.make,true);
};