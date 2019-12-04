import React, { Component } from 'react'
import axios from 'axios';
import UserCard from './UserCard';

export class User extends Component {
    state = {
        user: [],
        
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/AJWD92')
        .then(res => {
            this.setState({
                user: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <UserCard user={this.state.user} />
            </div>
        )
    }
}

export default User
