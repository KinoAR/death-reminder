// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Moment = require("moment");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("DateInput");

function holidayInRange(startMoment, holidayMoment, endMoment) {
  return holidayMoment.isBetween(startMoment, endMoment);
}

function numHolidaysInRange(startYear, endYear, dateStr, momentRange) {
  var amount = 0;
  for(var x = startYear; x <= endYear; ++x){
    var currHolidayMoment = Moment(String(x).concat(dateStr));
    var match = Curry._1(momentRange, currHolidayMoment);
    amount = (
      match ? 1 : 0
    ) + amount | 0;
  }
  return amount;
}

function createDateComponents(state) {
  var startDate = Moment(state[/* startDate */2]);
  var endDate = Moment(state[/* endDate */3]);
  var years = endDate.diff(startDate, "years") | 0;
  var currentYear = Moment().get("year");
  var dateList = List.mapi((function (index, element) {
          var momentRange = function (__x) {
            return __x.isBetween(startDate, endDate);
          };
          var holidayAmount = numHolidaysInRange(currentYear, currentYear + years | 0, element[0], momentRange);
          var match = holidayAmount > 1;
          var daysFormat = match ? "Days" : "Day";
          return React.createElement("div", {
                      key: String(index),
                      className: "col-12"
                    }, String(holidayAmount) + (" " + (element[1] + (" " + daysFormat))));
        }), /* :: */[
        /* tuple */[
          "-01-01",
          "New Year's"
        ],
        /* :: */[
          /* tuple */[
            "-02-14",
            "Valentine's"
          ],
          /* :: */[
            /* tuple */[
              "-07-04",
              "Independence"
            ],
            /* :: */[
              /* tuple */[
                "-11-25",
                "Thanksgiving"
              ],
              /* :: */[
                /* tuple */[
                  "-12-24",
                  "Christmas Eve"
                ],
                /* :: */[
                  /* tuple */[
                    "-12-25",
                    "Christmas"
                  ],
                  /* :: */[
                    /* tuple */[
                      "-12-31",
                      "New Year's Eve"
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]);
  return React.createElement("div", {
              className: "row text-center"
            }, React.createElement("div", {
                  className: "col-12"
                }, React.createElement("h1", undefined, "You have...")), $$Array.of_list(dateList), React.createElement("div", {
                  className: "col-12"
                }, React.createElement("h1", undefined, "Left.")));
}

function updateDate(action, $$event, self) {
  var dateValue = $$event.target.value;
  if (typeof action === "number") {
    if (action !== 1) {
      if (action !== 0) {
        
      } else {
        Curry._1(self[/* send */3], /* ProcessStartDate */Block.__(0, [dateValue]));
      }
    } else {
      Curry._1(self[/* send */3], /* ProcessEndDate */Block.__(1, [dateValue]));
    }
  }
  return Curry._1(self[/* send */3], /* StateUpdate */3);
}

function make(name, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1][/* hasStartDate */0] && self[/* state */1][/* hasEndDate */1];
              return React.createElement("div", {
                          className: "col-12"
                        }, React.createElement("div", {
                              className: "form-group"
                            }, React.createElement("label", undefined, "Start Date"), React.createElement("input", {
                                  className: "form-control",
                                  id: "startDateInputData",
                                  type: "date",
                                  onChange: Curry._1(self[/* handle */0], (function (param, param$1) {
                                          return updateDate(/* EnterStartDate */0, param, param$1);
                                        }))
                                }), React.createElement("label", undefined, "End Date"), React.createElement("input", {
                                  className: "form-control",
                                  id: "endDateInputData",
                                  type: "date",
                                  onChange: Curry._1(self[/* handle */0], (function (param, param$1) {
                                          return updateDate(/* EnterEndDate */1, param, param$1);
                                        }))
                                }), React.createElement("br", undefined), React.createElement("button", {
                                  className: "btn btn-success",
                                  id: "submitButton",
                                  onClick: (function (_event) {
                                      return Curry._1(self[/* send */3], /* SubmitDate */2);
                                    })
                                }, "Submit")), match ? createDateComponents(self[/* state */1]) : null, React.createElement("br", undefined));
            }),
          /* initialState */(function (param) {
              return /* record */[
                      /* hasStartDate */false,
                      /* hasEndDate */false,
                      /* startDate */"",
                      /* endDate */""
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                if (action === 3) {
                  return /* SideEffects */Block.__(1, [(function (_self) {
                                console.log(state);
                                return /* () */0;
                              })]);
                } else {
                  return /* NoUpdate */0;
                }
              } else if (action.tag) {
                return /* Update */Block.__(0, [/* record */[
                            /* hasStartDate */state[/* hasStartDate */0],
                            /* hasEndDate */true,
                            /* startDate */state[/* startDate */2],
                            /* endDate */action[0]
                          ]]);
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* hasStartDate */true,
                            /* hasEndDate */state[/* hasEndDate */1],
                            /* startDate */action[0],
                            /* endDate */state[/* endDate */3]
                          ]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.holidayInRange = holidayInRange;
exports.numHolidaysInRange = numHolidaysInRange;
exports.createDateComponents = createDateComponents;
exports.updateDate = updateDate;
exports.make = make;
/* component Not a pure module */
