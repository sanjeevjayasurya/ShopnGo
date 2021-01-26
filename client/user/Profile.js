import React from 'react';
import { Redirect } from 'react-router';
import * as auth from '../auth/auth-helper'
import { read } from '../user/api-user'


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { user: '', redirect: false }
        this.match = props.match
    }

    init = (userId) => {
        const jwt = auth.isAuthenticated()
        read({
            userId: userId
        }, { t: jwt.token }).then((data) => {
            if (data.error)
                this.setState({ redirect: true })
            else
                this.setState({ user: data })
        })
    }

    componentDidMount = () => {
        this.init(this.match.params.userId)
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps.match.params.userId)
    }

    render() {
        const { redirect } = this.state
        if (redirect) {
            return <Redirect to='/signin' />
        }
        return (
            <div className="profile">
                <span className="profile--user">{this.state.user.name}</span>
                <span className="profile--email">{this.state.user.email}</span>
                <span className="profile--date">{(new Date(this.state.user.created)).toDateString()}</span>
            </div>
        )
    }
}

export default Profile