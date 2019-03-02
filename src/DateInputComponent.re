type state = {
  hasStartDate:bool,
  hasEndDate:bool,
  startDate:string,
  endDate:string,
}

type action = 
| EnterStartDate
| EnterEndDate
| ProcessStartDate(string)
| ProcessEndDate(string)
| SubmitDate
| StateUpdate;

let component = ReasonReact.reducerComponent("DateInput");

let createDateComponents = (state) => {
  let startDate = MomentRe.momentDefaultFormat(state.startDate);
  let endDate = MomentRe.momentDefaultFormat(state.endDate);
  let years = endDate
  -> MomentRe.diff(startDate, `years) -> int_of_float;
  let currentYear = MomentRe.momentNow() |> MomentRe.Moment.get(`year) |> string_of_int;
  let appendYear = Js.String.concat(currentYear)
  let typesOfDates = [
    (MomentRe.momentDefaultFormat(appendYear("-02-14")), "Valentine's"), 
    (MomentRe.momentDefaultFormat(appendYear("-12-25")), "Christmas"),
    (MomentRe.momentDefaultFormat(appendYear("-12-31")), "New Year's")
  ];
  
  let dateList = List.mapi((index, element) => {
    let (moment, holidayName) = element;
    let adjustedYear = MomentRe.Moment.isAfter(startDate, moment) ? years - 1 : years;
    let daysFormat = adjustedYear > 1 ? "Days" : "Day";
    <div key={index -> string_of_int} className="col-12">
      {ReasonReact.string(string_of_int(adjustedYear) ++ " " ++holidayName ++ " " ++ daysFormat)}
    </div>
  }, typesOfDates);
  <div className="row">
    <h1> {ReasonReact.string("You have...")} </h1>
    (ReasonReact.array(Array.of_list(dateList)))
  </div>;
}

let updateDate = (action, event, self) => {
  open ReasonReact;
  let dateValue = event->ReactEvent.Form.target##value;
  switch(action) {
    | EnterStartDate => self.send(ProcessStartDate(dateValue));
    | EnterEndDate =>  self.send(ProcessEndDate(dateValue)); 
    | _ => ()
  };
  self.send(StateUpdate);
};

let make = (~name, _children) => {
  ...component,
  initialState: () => {hasStartDate:false, hasEndDate:false, startDate:"", endDate:""},
  reducer: (action, state) => {
    switch(action) {
      | ProcessStartDate(dateValue) => ReasonReact.Update({...state, startDate:dateValue, hasStartDate:true})
      | ProcessEndDate(dateValue) => ReasonReact.Update({...state, endDate: dateValue, hasEndDate: true})
      | StateUpdate => ReasonReact.SideEffects(_self => Js.log(state));
      | _ => ReasonReact.NoUpdate
    }
  },
  render: self => {
    <div className="col-12">
      <div className="form-group">
        <label> {ReasonReact.string("Start Date")} </label>
        <input type_="date" className="form-control" id="startDateInputData" onChange={self.handle(updateDate(EnterStartDate))} />
        <label> {ReasonReact.string("End Date")} </label>
        <input type_="date" className="form-control" id="endDateInputData" onChange={self.handle(updateDate(EnterEndDate))} />

        <br/>
        <button className="btn btn-success" id="submitButton" onClick={_event => self.send(SubmitDate)}>
          {ReasonReact.string("Submit")}
        </button>
      </div>
    {
      self.state.hasStartDate && self.state.hasEndDate ? 
      createDateComponents(self.state) : ReasonReact.null
    }
    <br />
    </div>;
  }
};