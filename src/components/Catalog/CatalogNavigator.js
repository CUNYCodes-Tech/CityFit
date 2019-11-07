import React, { Component } from 'react';
import Arms from './ExcerciseTypes/Arms';
import Legs from './ExcerciseTypes/Legs';
import Chest from './ExcerciseTypes/Chest';
import Back from './ExcerciseTypes/Back';
import Shoulders from './ExcerciseTypes/Shoulders';

class CatalogNavigator extends Component{
  // constructor(props) {
  //   super(props);
  // }
  state = {
    muscleGroup: 1
  }

  backToCatalog = () => {
    this.props.history.goBack();
  }

 	 render(){
		  console.log(this.props)
		switch (this.props.match.params.category) {
			case 'arms':
				return (
					<Arms
						backToCatalog = {this.backToCatalog}
						prevProp = {this.props}
					/>
				)
			case 'legs': 
				return (
					<Legs
						backToCatalog = {this.backToCatalog}				
					/>)
			case 'chest': 
				return (
					<Chest
						backToCatalog = {this.backToCatalog}
					/>
				)
			case 'back': 
				return(
					<Back
						backToCatalog = {this.backToCatalog}
					/>
				)
			case 'shoulders': 
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