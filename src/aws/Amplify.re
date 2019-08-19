type t;
[@bs.module "aws-amplify"] external amplify: t = "default";

module Configure = {

type config;
[@bs.module "../aws-exports.js"] external awsConfig: config = "default";


  [@bs.send] external configure: (t, config) => unit = "configure";
  let configure = configure(amplify, awsConfig);
};
let configure = () => Configure.configure;
type authData = string;

[@bs.module "aws-amplify"] [@bs.scope "Auth"]
external currentAuthenticatedUser: unit => Js.Promise.t('a) = "currentAuthenticatedUser";
let getToken =
  currentAuthenticatedUser()
  |> Js.Promise.then_(res => {
       open Belt.Option;
       let jwtToken =
         res##signInUserSession
         ->flatMap(signInUserSession => signInUserSession##idToken)
         ->getWithDefault("NO_CURRENT_USER");
       Js.log2("RES: ", res);
       Js.log2("RES##signInUserSession: ", res##signInUserSession);
       Js.log2("jwtToken: ", jwtToken);
       let token: authData = jwtToken;
       //  Js.Promise.resolve(jwtToken);
       Js.Promise.resolve(token);
     });