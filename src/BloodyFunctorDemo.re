
// https://bloodyowl.github.io/blog/2019-01-23-generating-reason-react-components-with-functors/
module type ParamType = {
  type t;
  let name: string;
  let render: t => React.element;
};
module Make = (Param: ParamType) => {
  type state = {
    value: Param.t,
  };
  [@react.component]
  let make = (~value: Param.t) => {
    let (value, _setValue) = React.useState(() => value);

      <div style={ReactDOMRe.Style.make(~fontSize="32px", ())}>
        /* some markup */
         {Param.render(value)} </div>;
  };
};

module IntValue =
  Make({
    type t = int;
    let name = "Int";
    let render = x => x->string_of_int->React.string;
  });
// open BloodyFunctorDemo;
// ReactDOMRe.renderToElementWithId(<IntValue value=2 />, "root");