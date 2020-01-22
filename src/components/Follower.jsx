import React, { Component } from 'react'
import axios from 'axios';
import FollowerCard from './FollowerCard';

export class Follower extends Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        console.log('cDM is working')
        axios
        .get('https://api.github.com/users/AJWD92/followers')
        .then(response => { 
            console.log(response.data);
            this.setState({
                followers: response.data
            }); 
        });
    }

    render() {
        console.log('followers are rendering')
        return (
            <div>
                {this.state.followers.map(follower => <FollowerCard follower={follower} />)}
            </div>
        )
    }
}

export default Follower
