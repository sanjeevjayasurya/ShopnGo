import React, { Component } from 'react'
import '../styles/signup.scss'
import { create } from './api-user'
import Modal from '../components/Modal'
import { Link } from 'react-router-dom'
class Signup extends Component {
    state = {
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    clickSubmit = (event) => {
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }
        create(user).then((data) => {
            if (data.error)
                this.setState({ error: data.error })
            else
                this.setState({ error: '', open: true })
        })
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <section className="sidebar">
                    <header>
                        shopngo
                    </header>
                </section>
                <main className="form-container">
                    <header>
                        shopngo
                    </header>
                    <form onSubmit={this.clickSubmit}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" label="Name" value={this.state.name} onChange={this.handleChange('name')} required />
                        <label htmlFor="mail">Email</label>
                        <input id="mail" type="email" label="E-mail" value={this.state.email} onChange={this.handleChange('email')} required />
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" value={this.state.password} onChange={this.handleChange('password')} required />
                        <input id="submit" type="submit" />
                    </form>
                </main>
                { this.state.open &&
                    <Modal open={this.state.open} handleClose={this.handleClose}>
                        <div className="">
                            <Link to="/signin">
                                <button className="sign-in">
                                    Sign In
                                </button>Î
                            </Link>
                        </div>
                    </Modal>
                }
            </div>
        )
    }
}

export default Signup