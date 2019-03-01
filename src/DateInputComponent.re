let component = ReasonReact.statelessComponent("DateInput");

let make = (~message, _children) => {
  ...component,
  render: self =>
    <div>
      {ReasonReact.string(message)}
    </div>
};