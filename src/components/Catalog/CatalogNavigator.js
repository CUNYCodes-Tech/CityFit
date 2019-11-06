import React, { Component } from 'react';
import CatalogHome from './CatalogHome';
import Arms from './ExcerciseTypes/Arms';
import Legs from './ExcerciseTypes/Legs';
import Chest from './ExcerciseTypes/Chest';
import Back from './ExcerciseTypes/Back';
import Shoulders from './ExcerciseTypes/Shoulders';

class CatalogNavigator extends Component{

  state = {
    muscleGroup: 1
}

backToCatalog = () => {
  this.setState({muscleGroup: 1});
}

showArms = () =>{
  this.setState({muscleGroup: 2});
}

showLegs = () =>{
  this.setState({muscleGroup : 3});
}

showChest = () =>{
  this.setState({muscleGroup : 4});
}

showBack = () =>{
  this.setState({muscleGroup : 5});
}

showShoulders = () =>{
  this.setState({muscleGroup : 6});
}

render(){
  const {muscleGroup} = this.state;
 

  switch (muscleGroup) {
    case 1:
        return (
            <CatalogHome
            showArms={this.showArms}
            showLegs={this.showLegs}
            showChest={this.showChest}
            showBack ={this.showBack}
            showShoulders ={this.showShoulders}
            />   
        )
    case 2:
        return (
            <Arms
            backToCatalog = {this.backToCatalog}
            />
        )
    case 3: 
        return (
            <Legs
            backToCatalog = {this.backToCatalog}
                
            />)
    case 4: 
        return (
          <Chest
          backToCatalog = {this.backToCatalog}
          />
        )
    case 5: 
          return(
            <Back
            backToCatalog = {this.backToCatalog}
            />
          )
    case 6: 
          return(
            <Shoulders
            backToCatalog = {this.backToCatalog}
            />
          )      
    default:
  }
}
}
export default CatalogNavigator