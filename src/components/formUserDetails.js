import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep;
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            //handleChange={handleChange}
            onChange={handleChange()}
          />
        </>
      </MuiThemeProvider>
    );
  }
}
export default FormUserDetails;
