import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values,handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Information"/>
                    <TextField 
                      hintText= "Enter Your City"
                      floatingLabelText="City"
                      onChange={handleChange('city')}
                      defaultValue={values.city}
                    />
                <br/>
                <TextField 
                      hintText= "Enter Your Gender"
                      floatingLabelText="Gender"
                      onChange={handleChange('gender')}
                      defaultValue={values.gender}
                    />
                <br/>
                <TextField 
                      hintText= "Enter Your Height"
                      floatingLabelText="Height"
                      onChange={handleChange('height')}
                      defaultValue={values.height}
                    />
                <br/>
                <TextField 
                      hintText= "Enter Your Weight"
                      floatingLabelText="Weight"
                      onChange={handleChange('weight')}
                      defaultValue={values.weight}
                    />
                <br/>
                <TextField 
                      hintText= "Enter Your BodyType"
                      floatingLabelText="BodyType"
                      onChange={handleChange('bodyType')}
                      defaultValue={values.bodyType}
                    />
                <br/>
                <TextField 
                      hintText= "Choose A Fitness Goal"
                      floatingLabelText="Fitness Goal"
                      onChange={handleChange('fitnessGoal')}
                      defaultValue={values.fitnessGoal}
                    />
                <br/>
                <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                />
                <RaisedButton
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }

}

export default FormPersonalDetails

