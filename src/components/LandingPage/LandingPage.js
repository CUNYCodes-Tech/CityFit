import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './landingPage.css';



export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            recentBlogPost: {
                name: '',
                url: ''
            }
        }
    }

    FetchDataFromRssFeed(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var myObj = JSON.parse(request.responseText);
                for(var i = 0; i < 1; i++){
                    this.setState({
                        recentBlogPost: {
                            name: myObj.items[i].title,
                            url: myObj.items[i].link
                        }
                    });
                }
            }
        }
        request.open("GET", "blog.myfitnesspal.com/feed ", true);
        request.send();
    }

    componentDidMount(){
        {this.FetchDataFromRssFeed()}
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
                    <h3>
                        Exercise Catalog Introduction
                    </h3>
                </div>
                <div className='landingSection'>
                    <h1>Section 2</h1>
                    <div>
                        Fitness News Through RSS Feed
                        Check out our blog: <a target="_blank"rel="noreferrer noopener" href={this.state.recentBlogPost.url}>{this.state.recentBlogPost.name}</a>
                    </div> 
                </div>
                <div className='landingSection'>
                    <h1>Section 3</h1>
                    <h3>
                        Randomly Generated Forum Post
                    </h3> 
                </div>
            </div>
        )
    }
}
