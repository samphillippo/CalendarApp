import React, { Component } from "react";

//duplicate of event, needs to be fixed...
export default class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : props.name,
            start : props.start,
            end : props.end,
        };
      }

      //We need to figure out how to list all events, not just an example
    render() {
      return (
        <div className="event">
            <h4> {this.props.name} </h4>
            <p>event placeholder text</p>
        </div>

      )
    }
  }