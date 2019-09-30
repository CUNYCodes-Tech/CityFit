import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import fire from '../../base';

export class Comfirm extends Component {
    submit  = () => {
        const { values: {firstName, lastName,borough, gender,height, weight,bodyType,fitnessGoal}} = this.props;
        // e.preventDefault();
         if(firstName === ''){
             alert("First Name Cannot Be Empty")
             this.props.twoStepsBack();
         }
         else if(lastName === ''){
             alert("Last Name Cannot Be Empty")
             this.props.twoStepsBack();
         }
         else if (borough === '' || gender==='' || height === '' || weight === '' || bodyType === '' || fitnessGoal === ''){
             alert("No Field Can be Left Empty")
             this.props.prevStep();
         }
         else{ 
            this.addUserProfile();
            this.props.nextStep();
         }
         //PROCESS FORM
     }
     back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    addUserProfile(){
        const { values: {firstName, lastName,borough, gender,height, weight,bodyType,fitnessGoal}} = this.props;
        var UserInfo = {
            first_name: firstName,
            last_name: lastName,
            Borough: borough,
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
        const { values: {firstName, lastName,borough, gender,height, weight,bodyType,fitnessGoal}} = this.props;
        return (
            <form>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Comfrim User Information" />
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
                           primaryText ="Borough"
                           secondaryText= {borough}
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
                    



                        <br />
                        <RaisedButton
                            label="Submit"
                            primary={true}
                            style={styles.button}
                            onClick={this.submit.bind(this)}
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

export default Comfirm
