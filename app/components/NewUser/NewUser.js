import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Picker,
  ScrollView
} from 'react-native';


export default class NewUser extends Component{
    state = {
        fullname: '',
        email: '',
        height:'',
        weight: '',
        age: '',
        gender:'',
        bodytype: '',
        fitnessgoal:'' 
    }
    
    handleFullName =(text) => {
        this.setState({fullname: text})
    }
    handleEmail = (text) => {
        this.setState({email: text})
    }
    handleHeight =(text) => {
        this.setState({height: text})
    }
    handleWeight =(text) => {
        this.setState({weight: text})
    }
    handleAge =(text) => {
        this.setState({Age: text})
    }

    updateGender =(gender) => {
        this.setState({gender:gender})
    }
    updateBodyType =(bodytype) => {
        this.setState({bodytype:bodytype})
    }
    updateFitnessGoal =(fitnessgoal) => {
        this.setState({fitnessgoal:fitnessgoal})
    }
    

    register = (fullname,email,height,weight,age) =>{
        alert('email:' + email + 'password' + fullname)
    }

  render(){
    return(
        <View style = {styles.container}>
            <ScrollView>
            <Text> Please Input your Full Name, Email, Height and Weight,Age Gender, Body Type and Fitness Goal</Text>
            <Text>Hello</Text>
            <TextInput style ={styles.input}
                underlineColorAndroid ="transparent"
                placeholder = "FullName"
                placeholderTextColor = "#f0f"
                autoCapitalize = "none"
                onChangeText = {this.handleFullName}/>

            <TextInput style ={styles.input}
                underlineColorAndroid ="transparent"
                placeholder = "Email"
                placeholderTextColor = "#f0f"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>

            <TextInput style ={styles.input}
                underlineColorAndroid ="transparent"
                placeholder = "Height"
                placeholderTextColor = "#f0f"
                autoCapitalize = "none"
                onChangeText = {this.handleHeight}/>

            <TextInput style ={styles.input}
                underlineColorAndroid ="transparent"
                placeholder = "Weight"
                placeholderTextColor = "#f0f"
                autoCapitalize = "none"
                onChangeText = {this.handleWeight}/>

            <TextInput style ={styles.input}
                underlineColorAndroid ="transparent"
                placeholder = "Age"
                placeholderTextColor = "#f0f"
                autoCapitalize = "none"
                onChangeText = {this.handleAge}/>

            <Text> Gender</Text>

            <Picker selectedValue = {this.state.gender} onValueChange = {this.updateGender}>
                    <Picker.Item label = "Male" value = "Male" />
                    <Picker.Item label = "Female" value = "Female"/>


            </Picker>
            <Text style ={styles.text}>{this.state.gender}</Text>

            <Text> BodyType</Text>
             <Picker selectedValue = {this.state.bodytype} onValueChange = {this.updateBodyType}>
                    <Picker.Item label = "Skinny" value = "Skinny" />
                    <Picker.Item label = "Fat" value = "Fat"/>
                    <Picker.Item label = "Athletic" value = "Athletic"/>
            </Picker>
            <Text style ={styles.text}>{this.state.bodytype}</Text>
            
            <Text> FitnessGoal</Text>
            <Picker selectedValue = {this.state.fitnessgoal} onValueChange = {this.updateFitnessGoal}>
                    <Picker.Item label = "BurnFat" value = "BurnFat" />
                    <Picker.Item label = "BuildMuscle" value = "BuildMuscle"/>
                    <Picker.Item label = "Tone" value = "Tone"/>
                    <Picker.Item label = "Ripped" value = "Ripped"/>
            </Picker>
            <Text style ={styles.text}>{this.state.fitnessgoal}</Text>
            

        
            

            <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                () => this.register(this.state.fullname, this.state.email,this.state.height,
                    this.state.weight,this.state.age,this.state.gender, this.state.bodytype,
                    this.state.fitnessgoal)}>
                        <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
  }
}

AppRegistry.registerComponent('NewUser', () => NewUser);

const styles = StyleSheet.create({

    text :{
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    },
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })
