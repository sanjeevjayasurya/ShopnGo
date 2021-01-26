import React from 'react'
import { Redirect } from 'react-router'
import { signin } from '../user/api-auth'
import * as auth from '../auth/auth-helper'
class Signin extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        redirect: false,
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    clickSubmit = (event) => {
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined,
        }
        signin(user).then((data) => {
            if (data.error) {
                this.setState({ error: data.error })
            } else {
                auth.authenticate(data, () => {
                    this.setState({ redirect: true })
                })
            }
        })
        event.preventDefault()
    }

    render() {
        const { from } = this.props.location.state || {
            from: {
                pathname: "/"
            }
        }
        const { redirect, error } = this.state
        if (redirect)
            return (<Redirect to={from} />)
        return (
            <main className="form-container">
                <form className="signin" onSubmit={this.clickSubmit}>
                    {error && <div className="error">{error}</div>}
                    <label htmlFor="mail">Email</label>
                    <input id="mail" type="email" label="E-mail" value={this.state.email} onChange={this.handleChange('email')} required />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" value={this.state.password} onChange={this.handleChange('password')} required />
                    <input id="submit" type="submit" />
                </form>
            </main>
        )

    }
}

export default Signin