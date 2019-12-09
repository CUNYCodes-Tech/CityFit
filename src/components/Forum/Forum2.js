import React, { Component } from 'react';
import Post from './post';
import firebase from '../../base';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import '../../App.css';
import './forum.css';


export default class Forum2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            post: "",
            categories: ['Workout Questions', 'Gym Partners', 'Gym Recommendations', 'Recovery and Rehabilitation'],
            category: '',
            posts: {}
        }
    }

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.getPosts();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            post: e.target.value
        })
    }

    getPosts = () => {
        if(this._isMounted) {
            let posts = firebase.database().ref('Posts');
            posts.on('value', (snapshot) => {
                let data = snapshot.val();
                this.setState({
                    ...this.state,
                    posts: {...data}
                })
            })
        }
    }

    makePost = () => {
        var currUser = firebase.auth().currentUser;

        if(currUser !== null && this._isMounted) {
            const userData = firebase.database().ref('UserProfile/' + currUser.uid);
            userData.on('value', (snapshot) => {
                let data = snapshot.val();
                let user = data.firstName + " " + data.lastName;
                let postDate = new Date();
                let post = this.state.post;
                let category = this.state.category;
                let database = firebase.database().ref('Posts').push();
                
                database.set({
                    author: user,
                    post: post,
                    createdAt: postDate.toString(),
                    category: category
                })

                database.on('child_added', (data) => { 
                    console.log('added')
                    this.getPosts();
                })
            })
        }
    }

    render() {
        return (
            <div style={{height: '100%', minHeight: '100vh', marginTop: '3rem'}}>
                <h1>Ask the Community</h1>
                <div className='flexCenter' style={{}}>
                    {
                        Object.keys(this.state.posts).map((post) => {
                            return(
                                <Post key={post} id={post} post={this.state.posts[post]}/>
                            )
                        })
                    }
                </div>

                <Dropdown style={{marginTop: '3rem'}}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {this.state.category === '' ? 'Category' : this.state.category}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            this.state.categories.map((name) => {
                                return (
                                    <Dropdown.Item 
                                        onClick={() => this.setState({...this.state, category: name})}
                                        key={name}
                                    >
                                        {name}
                                    </Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
                
                <div className='flexCenter'>
                    <textarea onChange={(e) => this.onChange(e)} placeholder='Write Your Post Here..'></textarea>
                    {
                        this.state.category !== '' ? 
                            (<Button variant='primary' onClick={() => this.makePost()}>Post</Button>) :
                            (<><span className='label'>Please Select a Category</span> <Button variant='primary' disabled>Post</Button></>)
                    }
                </div>
                
            </div>
        )
    }
}
