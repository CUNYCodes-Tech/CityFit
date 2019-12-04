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
        },
        cardio: {
          img: 'https://images.unsplash.com/photo-1427384906349-30452365b5e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
          credit: 'Photo by Curtis MacNewton on Unsplash'
        },
        abs: {
          img: 'https://images.unsplash.com/photo-1529265245520-9bb40daef5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1094&q=80',
          credit: 'Photo by Tibout Maes on Unsplash'
        }
      }
    }
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
                <Card style={{ width: '20rem', margin: '15px', boxShadow: '3px 4px 8px grey' }} key={name + i}>
                  <OverlayTrigger
                    placement='bottom'
                    overlay={
                      <Tooltip>
                        {this.state.catagories[name].credit}
                      </Tooltip>
                    }
                  >
                    <Card.Img variant="top" src={this.state.catagories[name].img} credit={this.state.catagories[name].credit} height='225em' width='1350em'/>
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
        </div>
      </>
     );
  }
}
export default CatalogHome; 