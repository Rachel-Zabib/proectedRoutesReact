import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Click the button to go to the administration page</p>
                <Link exact to="/manager"><button>click</button></Link>
            </div>
        )
    }
}
