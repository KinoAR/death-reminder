// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Component1$ReactTemplate = require("./Component1.bs.js");
var Component2$ReactTemplate = require("./Component2.bs.js");
var DateInputComponent$ReactTemplate = require("./DateInputComponent.bs.js");


  require("./bootstrap.min.css");
  require("./style.css");

;

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, DateInputComponent$ReactTemplate.make("Test Message", /* array */[])), "dateInput");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Component1$ReactTemplate.make("Hello! Click this text.", /* array */[])), "index1");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Component2$ReactTemplate.make("Hello!", /* array */[])), "index2");

/*  Not a pure module */
