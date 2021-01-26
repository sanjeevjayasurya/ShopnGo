import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import User from './user/User'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Profile from './user/Profile'
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={User} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path='/user/:userId' component={Profile} />
        </Switch>
    )
}

export default Router