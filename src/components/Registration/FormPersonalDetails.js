import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Select from '@material-ui/core/Select';
import MenuItem from 'material-ui/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';





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
               <br/>
                <InputLabel >Gender</InputLabel>
                    <Select
                    value={values.gender}
                    onChange={handleChange('gender')}
                    defaultValue={values.gender}
                    >
                <MenuItem value ={'Male'}>Male </MenuItem>
                <MenuItem value ={'Female'}>Female</MenuItem> 
                </Select>
                <br/>
                <br/>
                <InputLabel >Height</InputLabel>
                <Select
                    value={values.height}
                      onChange={handleChange('height')}
                      defaultValue={values.height}
                >
                <MenuItem value ={'5.0'}> 5'0 </MenuItem>
                <MenuItem value ={'5.1'}> 5'1 </MenuItem>
                <MenuItem value ={'5.2'}> 5'2 </MenuItem>
                <MenuItem value ={'5.3'}> 5'3 </MenuItem>
                <MenuItem value ={'5.4'}> 5'4 </MenuItem>
                <MenuItem value ={'5.5'}> 5'5 </MenuItem>
                <MenuItem value ={'5.6'}> 5'6 </MenuItem>
                <MenuItem value ={'5.7'}> 5'7 </MenuItem>
                <MenuItem value ={'5.8'}> 5'8 </MenuItem>
                <MenuItem value ={'5.9'}> 5'9 </MenuItem>
                <MenuItem value ={'5.10'}> 5.10 </MenuItem>
                <MenuItem value ={'5.11'}> 5'11 </MenuItem>
                <MenuItem value ={'6.0'}> 6'0 </MenuItem>
                <MenuItem value ={'6.1'}> 6'1 </MenuItem>
                <MenuItem value ={'6.2'}> 6'2 </MenuItem>
                <MenuItem value ={'6.3'}> 6'3 </MenuItem>
                <MenuItem value ={'6.4'}> 6'4 </MenuItem>
                <MenuItem value ={'6.5'}> 6'5 </MenuItem>
                <MenuItem value ={'6.6'}> 6'6 </MenuItem>
                <MenuItem value ={'6.7'}> 6'7 </MenuItem>
                <MenuItem value ={'6.8'}> 6'8 </MenuItem>
                <MenuItem value ={'6.9'}> 6'9 </MenuItem>
                <MenuItem value ={'6.10'}> 6'10 </MenuItem>
        
                </Select>
                <br/>
                <br/>
                <InputLabel >Weight</InputLabel>
                <Select 
                      value={values.weight}
                      onChange={handleChange('weight')}
                      defaultValue={values.weight}
                      
                    >
                    <MenuItem value ={'< 80'}> Less than 80 </MenuItem>
                    <MenuItem value ={'80 - 120 '}> 80 - 120 </MenuItem>
                    <MenuItem value ={'120 - 160'}> 120 - 160 </MenuItem>
                    <MenuItem value ={'160 - 200'}> 160 - 200 </MenuItem>
                    <MenuItem value ={'200 - 240'}> 200 - 240 </MenuItem>
                    <MenuItem value ={'240 - 280'}> 240 - 280 </MenuItem>
                    <MenuItem value ={'280 - 320'}> 280 - 320 </MenuItem>
                    <MenuItem value ={'> 320'}> Greater than 320 </MenuItem>
                </Select>
                
                <br/>
                <br/>
                <InputLabel >BodyType</InputLabel>
                <Select 
                    value ={values.bodyType}
                      onChange={handleChange('bodyType')}
                      defaultValue={values.bodyType}
                      
                    >
                <MenuItem value ={'Skinny'}> Skinny </MenuItem>
                <MenuItem value ={'Fat'}>Fat </MenuItem>
                <MenuItem value ={'Muscular'}> Muscular </MenuItem>
                </Select>   
                <br/>
                <br/>
                <InputLabel >Fitness Goal</InputLabel>
                <Select 
                      value={values.fitnessGoal}
                      onChange={handleChange('fitnessGoal')}
                      defaultValue={values.fitnessGoal}
                      
                    >
                <MenuItem value ={'BurnFat'}> BurnFat </MenuItem>
                <MenuItem value ={'BuildMuscle'}>Build Muscle </MenuItem>
                <MenuItem value ={'ToneUp'}> ToneUp </MenuItem>
                </Select>
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

