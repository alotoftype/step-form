import React, { Component } from "react";
import formUserDetails from "./formUserDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.step;
    this.setState({
      step: step + 1
    });
  };
  // go back to previous step
  prevStep = () => {
    const { step } = this.step;
    this.setState({
      step: step + 1
    });
  };

  handleChange = (input, e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <>
            <formUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 2:
        return <h1>Form Personal details</h1>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Success</h1>;
    }

    return <div />;
  }
}
