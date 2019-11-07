import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './catalog.css';



class CatalogHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: {
        arms: {
          img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          credit: 'Photo by Danielle Cerullo on Unsplash'
        }, 
        legs: {
          img: 'https://images.unsplash.com/photo-1541600383005-565c949cf777?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          credit: 'Photo by Alora Griffiths on Unsplash'
        }, 
        chest: {
          img: 'https://images.unsplash.com/photo-1534368959876-26bf04f2c947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          credit: 'Photo by Alora Griffiths on Unsplash'
        }, 
        back: {
          img: 'https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          credit: 'Photo by Victor Freitas on Unsplash'
        }, 
        shoulders: {
          img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1349&q=80',
          credit: 'Photo by John Arano on Unsplash'
        }
      }
    }
  }
  Arms = e =>{
    e.preventDefault();
    this.props.showArms();
  }
  Legs = e =>{
      e.preventDefault();
      this.props.showLegs();
  }
  Chest = e =>{
    e.preventDefault();
    this.props.showChest();
  }

  Back = e =>{
    e.preventDefault();
    this.props.showBack();
  }

  Shoulders = e =>{
    e.preventDefault();
    this.props.showShoulders();
  }
  
  
  render() {
    return (
      <>
        <h1 style={{marginTop: '3%'}}>Explore a Muscle Group</h1>
        <div className='centerFlex'>
          {
            Object.keys(this.state.catagories).map((name, i) => {
              let disName = name.charAt(0).toUpperCase() + name.slice(1)
              return (
                <Card style={{ width: '20rem', margin: '15px' }} key={name + i}>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={
                      <Tooltip>
                        {this.state.catagories[name].credit}
                      </Tooltip>
                    }
                  >
                    <Card.Img variant="top" src={this.state.catagories[name].img} credit={this.state.catagories[name].credit}/>
                  </OverlayTrigger>
                  <Card.Body>
                    <Card.Title>{disName}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.props.history.push(`/catalog/${name}`)}>Explore</Button>
                  </Card.Body>
                </Card>
              )
            })
          }
            {/* <button
                onClick = {this.Arms}
                className="button"
              
          
            > 
            Arms
            </button>
          
            

            <button
              
                onClick = {this.Legs}
                className="button"
            > 
            Legs
            </button>

            <button
                onClick = {this.Chest}
                className="button"
            > 
            Chest
            </button>

            <button
                onClick = {this.Back}
                className="button"
            > 
            Back
            </button>

            <button
                onClick = {this.Shoulders}
                className="button"
            > 
            Shoulders
            </button>
            <br/>
            <img src ={bicep} alt="bicep"></img>
            <img src ={legs} alt="leg"></img>
            <img src ={chest} alt="bench"></img>
            <img src ={back} alt="bicep"></img>
            <img src ={shoulders} alt="bicep"></img> */}

        </div>
      </>
    

    
     );
  }
}
export default CatalogHome; 