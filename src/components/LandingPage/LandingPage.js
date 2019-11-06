import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './landingPage.css';


export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    render() {
        return (
            <div>
               <Jumbotron fluid>
                    <h1 id='jumbotext1'>Anything Is Possible</h1>
                    <h1 id='jumbotext2'>Dream Big</h1>
                </Jumbotron>
                <div className='landingSection'>
                    <h1>Section 1</h1>
                    <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Potenti nullam ac tortor vitae purus faucibus. Diam ut venenatis tellus in metus vulputate eu. In metus vulputate eu scelerisque felis. Orci ac auctor augue mauris augue neque. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Turpis in eu mi bibendum neque. Netus et malesuada fames ac. Consectetur libero id faucibus nisl.
                    </h6>
                    <h6>
                        Massa vitae tortor condimentum lacinia quis vel. Aenean vel elit scelerisque mauris. Quam id leo in vitae turpis. Feugiat in ante metus dictum at tempor commodo. Risus viverra adipiscing at in tellus. In nibh mauris cursus mattis. Penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Feugiat vivamus at augue eget arcu dictum varius duis. Ut tellus elementum sagittis vitae et leo duis ut diam.
                    </h6>
                    <h6>
                        Nisi quis eleifend quam adipiscing vitae. Habitant morbi tristique senectus et netus et malesuada fames ac. In mollis nunc sed id semper risus in. Mattis rhoncus urna neque viverra justo nec. Leo integer malesuada nunc vel risus commodo viverra maecenas. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Varius quam quisque id diam vel quam. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Enim tortor at auctor urna nunc id cursus. Sit amet consectetur adipiscing elit.
                    </h6>
                </div>
                <div className='landingSection'>
                    <h1>Section 2</h1>
                    <h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet. Potenti nullam ac tortor vitae purus faucibus. Diam ut venenatis tellus in metus vulputate eu. In metus vulputate eu scelerisque felis. Orci ac auctor augue mauris augue neque. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Turpis in eu mi bibendum neque. Netus et malesuada fames ac. Consectetur libero id faucibus nisl.

                        Massa vitae tortor condimentum lacinia quis vel. Aenean vel elit scelerisque mauris. Quam id leo in vitae turpis. Feugiat in ante metus dictum at tempor commodo. Risus viverra adipiscing at in tellus. In nibh mauris cursus mattis. Penatibus et magnis dis parturient montes nascetur. Nunc mattis enim ut tellus. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Feugiat vivamus at augue eget arcu dictum varius duis. Ut tellus elementum sagittis vitae et leo duis ut diam.

                        Nisi quis eleifend quam adipiscing vitae. Habitant morbi tristique senectus et netus et malesuada fames ac. In mollis nunc sed id semper risus in. Mattis rhoncus urna neque viverra justo nec. Leo integer malesuada nunc vel risus commodo viverra maecenas. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Varius quam quisque id diam vel quam. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Enim tortor at auctor urna nunc id cursus. Sit amet consectetur adipiscing elit.
                    </h6>
                </div>
            </div>
        )
    }
}
