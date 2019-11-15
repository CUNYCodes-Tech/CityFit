import React, { Component } from 'react';
import Arms from './ExcerciseTypes/Arms';
import Legs from './ExcerciseTypes/Legs';
import Chest from './ExcerciseTypes/Chest';
import Back from './ExcerciseTypes/Back';
import Shoulders from './ExcerciseTypes/Shoulders';

class CatalogNavigator extends Component{
 	render(){
		switch (this.props.match.params.category) {
			case 'arms':
				return (
					<Arms
						prevProp = {this.props}
					/>
				)
			case 'legs': 
				return (
					<Legs
						prevProp = {this.props}				
					/>)
			case 'chest': 
				return (
					<Chest
						prevProp = {this.props}
					/>
				)
			case 'back': 
				return(
					<Back
						prevProp = {this.props}
					/>
				)
			case 'shoulders': 
				return(
					<Shoulders
						prevProp = {this.props}
					/>
				)      
			default:
		}
	}
}
export default CatalogNavigator