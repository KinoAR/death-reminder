[%%bs.raw {|
  require("./bootstrap.min.css");
  require("./style.css");
|}];


ReactDOMRe.renderToElementWithId(<DateInputComponent message="Test Message" />, "dateInput")
ReactDOMRe.renderToElementWithId(<Component1 message="Hello! Click this text." />, "index1");
ReactDOMRe.renderToElementWithId(<Component2 greeting="Hello!" />, "index2");
