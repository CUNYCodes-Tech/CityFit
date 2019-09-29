import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import fire from '../../base';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.addUserProfile();
        //PROCESS FORM
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    addUserProfile(){
        const { values: {firstName, lastName,city, gender,height, weight,bodyType,fitnessGoal}} = this.props;
        var UserInfo = {
            first_name: firstName,
            last_name: lastName,
            City: city,
            Gender: gender,
            Height: height,
            Weight: weight,
            BodyType: bodyType,
            FitnessGoal: fitnessGoal
        }
        /* Send the UserProfile to Firebase */
        fire.database().ref('UserProfile').push( UserInfo );
        
    }
    render() {
        const { values: {firstName, lastName,city, gender,height, weight,bodyType,fitnessGoal}} = this.props;
        return (
            <form>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Confrim User Information" />
                        <List>
                            <ListItem
                                primaryText="First Name"
                                secondaryText={firstName}
                            />
                            <ListItem

                                primaryText="Last Name"
                                secondaryText={lastName}
                            />
                            <ListItem
                                primaryText="City"
                                secondaryText={city}
                            />
                            <ListItem
                                primaryText="Gender"
                                secondaryText={gender}
                            />
                            <ListItem
                                primaryText="Height"
                                secondaryText={height}
                            />
                            <ListItem
                                primaryText="Weight"
                                secondaryText={weight}
                            />
                            <ListItem
                                primaryText="Body Type"
                                secondaryText={bodyType}
                            />
                            <ListItem
                                primaryText="Fitness Goal"
                                secondaryText={fitnessGoal}
                            />
                        </List>



                        <br />
                        <RaisedButton
                            label="Confirm & Continue"
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
            </form>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }

}

export default FormUserDetails
