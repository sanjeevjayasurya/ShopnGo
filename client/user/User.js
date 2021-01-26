import React, { Component } from 'react'
import { list } from './api-user'
import { Link } from 'react-router-dom'
class User extends Component {
    state = { users: [] }

    componentDidMount = () => {
        list().then((data) => {
            if (data.error) {
                console.error(data.error)
            }
            else {
                this.setState({
                    users: data
                })
            }
        })
    }

    render() {
        return (
            this.state.users.map((item, i) => {
                return (
                    <Link to={"/user/" + item._id} key={i}>
                        <div>{item.name}</div>
                    </Link>
                )
            }
            ))
    }
}

export default User