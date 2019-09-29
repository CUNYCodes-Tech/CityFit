import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import { withRouter, Redirect } from "react-router";


export class UserForm extends Component {
    //eventually make height and weight scroll menu's
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        city: '',
        gender: '',
        height: '',
        weight: '',
        bodyType: '',
        fitnessGoal: ''

    }
    //Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step +1
        });
    }

    //Back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        const {step} = this.state;
        const {firstName, lastName,city, gender,height,weight,bodyType,
        fitnessGoal} = this.state;
        const values = { firstName, lastName, city, gender, height, weight, bodyType, fitnessGoal}
        //Change case 4 to transition to user homescreen
        
        switch (step) {
            case 1:
                return (
                 <FormUserDetails
                   nextStep={this.nextStep}
                   handleChange={this.handleChange}
                   values={values}
                />   
                )
            case 2:
                return (
                    <FormPersonalDetails
                       nextStep={this.nextStep}
                       prevStep={this.prevStep}
                       handleChange={this.handleChange}
                       values={values}
                       />
                )
            case 3: 
                return (
                    <Confirm
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />)
            case 4: 
                return <Redirect to="/" />;
            default:
                
        }
       
    }
}

export default UserForm
