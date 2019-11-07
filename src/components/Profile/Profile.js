import React, { Component } from 'react';
import firebase from '../../base';
import './profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            regimen: {},
            MealPlan: {}
        }
    }

    componentDidMount() {
        this.getUserInfo();
    }

    getUserInfo = () => {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
            const userData = firebase.database().ref('UserProfile/' + user.uid);
            userData.on('value', (snapshot) => {
                let data = snapshot.val()
                this.setState({
                    user: {...data}
                }, () => {
                        let userData = this.state.user;
                        if (userData.fitnessGoal === "Burn Fat") {
                            const RegimenVal = firebase.database().ref('Regimen/LoseFat');
                            RegimenVal.on('value', (snapshot) => {
                                let data1 = snapshot.val();
                                console.log(data1);
                                this.setState({
                                    regimen: { ...data1 }
                                })
                            })
                            const MealPlanVal = firebase.database().ref('MealPlan/LoseFat');
                            MealPlanVal.on('value', (snapshot) => {
                                let data2 = snapshot.val();
                                console.log(data2);
                                this.setState({
                                    MealPlan: { ...data2 }
                                })
                            })
                        }
                        else if (userData.fitnessGoal === "Build Muscle") {
                            const RegimenVal = firebase.database().ref('Regimen/Build_Muscle');
                            RegimenVal.on('value', (snapshot) => {
                                let data3 = snapshot.val();
                                console.log(data3);
                                this.setState({
                                    regimen: { ...data3 }
                                })
                            })
                            const MealPlanVal = firebase.database().ref('MealPlan/Build_Muscle');
                            MealPlanVal.on('value', (snapshot) => {
                                let data4 = snapshot.val();
                                console.log(data4);
                                this.setState({
                                    MealPlan: { ...data4 }
                                })
                            })
                        }
                        else if (userData.fitnessGoal === "Tone Up") {
                            const RegimenVal = firebase.database().ref('Regimen/Tone_Muscle');
                            RegimenVal.on('value', (snapshot) => {
                                let data5 = snapshot.val();
                                console.log(data5);
                                this.setState({
                                    regimen: { ...data5 }
                                })
                            })
                            const MealPlanVal = firebase.database().ref('MealPlan/Tone_Muscle');
                            MealPlanVal.on('value', (snapshot) => {
                                let data6 = snapshot.val();
                                console.log(data6);
                                this.setState({
                                    MealPlan: { ...data6 }
                                })
                            })
                        }

                        else {
                            // user is not authenticated 
                            // nothing should be rendered from the database.
                        }
                })
               console.log(data)
            })

        } else {
            // No user is signed in.
            // handled by privateRoute
        }
    }
    render() {
        let user = this.state.user
        let regimen = this.state.regimen
        let MealPlan = this.state.MealPlan
        return (
            <div>
                <img src='https://images.unsplash.com/photo-1569839078801-94107e43e884?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
                alt = 'User Profile' width='350' height='250'/>

                <h3 className='mainText'>{ user.firstName } { user.lastName } </h3>
                <h5 className='subText'>{ user.borough }</h5>

                <h3 className='mainText'>Some General Information About Me</h3>
                <h5 className='subText'>I am a { user.gender }</h5>  
                <h5 className='subText'>I am { user.height } tall</h5>
                <h5 className='subText'>I weigh { user.weight }lbs</h5>
                <h5 className='subText'>I consider myself to be { user.bodyType }</h5>
                <h5 className='subText'>My Goal is to { user.fitnessGoal }</h5>
                <br />
                <h5 className='subText'>first Regimen Item: {regimen.first_item}</h5>
                <h5 className='subText'>second Regimen Item: {regimen.second_item}</h5>
                <h5 className='subText'>third Regimen Item: {regimen.third_item}</h5>
                <h5 className='subText'>fourth Regimen Item: {regimen.fourth_item}</h5>
                <h5 className='subText'>fifth Regimen Item: {regimen.fifth_item}</h5>
                <br />
                <h5 className='subText'>first MealPlan Item: {MealPlan.first_item} </h5>
                <h5 className='subText'>second MealPlan Item: {MealPlan.second_item}</h5>
                <h5 className='subText'>third MealPlan Item: {MealPlan.third_item}</h5>
                <h5 className='subText'>fourth MealPlan Item: {MealPlan.fourth_item}</h5>
                <h5 className='subText'>fifth MealPlan Item: {MealPlan.fifth_item}</h5>
            </div>
        )
    }
}
