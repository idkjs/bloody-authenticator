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