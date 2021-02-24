import React, { Component } from 'react'
import {auth} from "../../fireBase.config"

export default class Manager extends Component {

    logOutBtn=()=>{
        auth.signOut().then(() => {
            this.props.history.push("/");
          }).catch((error) => {
                alert(error," try again");
          });
    }

    render() {
        return (
            <div>
                <p>you are in manager page <br/> 
                your email is: <span>{auth.currentUser.email}</span></p>
                <button onClick={this.logOutBtn}>Log out</button>
            </div>
        )
    }
}
