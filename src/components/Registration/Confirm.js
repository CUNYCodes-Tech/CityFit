import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: {firstName, lastName,city, gender,height, weight,bodyType,fitnessGoal}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confrim User Information"/>
                    <List>
                        <ListItem 
                           primaryText ="First Name"
                           secondaryText= {firstName}
                        />
                        <ListItem 
                           primaryText ="Last Name"
                           secondaryText= {lastName}
                        />
                        <ListItem 
                           primaryText ="City"
                           secondaryText= {city}
                        />
                        <ListItem 
                           primaryText ="Gender"
                           secondaryText= {gender}
                        />
                        <ListItem 
                           primaryText ="Height"
                           secondaryText= {height}
                        />
                        <ListItem 
                           primaryText ="Weight"
                           secondaryText= {weight}
                        />
                        <ListItem 
                           primaryText ="Body Type"
                           secondaryText= {bodyType}
                        />
                        <ListItem 
                           primaryText ="Fitness Goal"
                           secondaryText= {fitnessGoal}
                        />
                    </List>
                    
                    
                
                <br/>
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
        );
    }
}

const styles = {
    button: {
        margin: 15
    }

}

export default FormUserDetails
