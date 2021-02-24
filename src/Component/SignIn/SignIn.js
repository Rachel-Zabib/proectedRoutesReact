import React, { Component } from 'react'
import {auth} from "../../fireBase.config"
import firebase from "firebase/app"
import "firebase/auth"

export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.emailRef=React.createRef();
        this.passwordRef=React.createRef();
    }
      
    signInClicked=()=>{
      let email=this.emailRef.current.value;
      let password=this.passwordRef.current.value;
 
      auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        this.props.history.push("/manager");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });

    }

    signUpClicked=()=>{
        let email=this.emailRef.current.value;
        let password=this.passwordRef.current.value;
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          
          this.props.history.push("/manager");

        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
      
    }
    signInGoogleClicked=()=>{
       let provider = new firebase.auth.GoogleAuthProvider();

       firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                this.props.history.push("/manager");

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                alert(errorMessage);
            });
    }
    signInFacebookClicked=()=>{
        let provider = new firebase.auth.FacebookAuthProvider();
       auth.signInWithPopup(provider)
        .then((result) => {
            this.props.history.push("/manager");

        //   /** @type {firebase.auth.OAuthCredential} */
        //   var credential = result.credential;
        //   // The signed-in user info.
        //   var user = result.user;
        //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //   var accessToken = credential.accessToken;

         
         
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage);
            
          // Handle Errors here.
        //   var errorCode = error.code;
        //   // The email of the user's account used.
        //   var email = error.email;
        //   // The firebase.auth.AuthCredential type that was used.
        //   var credential = error.credential;
      
        //   // ...
        });
      
     }
  
    render() {
        return (
            <div>
                <h2>Sign in</h2>
                 <div>
                        <input ref={this.emailRef} className="inputs" type="email" id="email" name="email" placeholder="Email Address" required/><br/>
                        <input ref={this.passwordRef} className="inputs" type="password" id="pass" name="password" placeholder="Password" minlength="6" required/><br/>
                       
                        <button id="signInBtn" onClick={this.signInClicked}>Sign in</button>
                        <button  onClick={this.signInGoogleClicked}>Sign in with google</button>
                        <button  onClick={this.signInFacebookClicked}>Sign in with facebook</button><br/>
                        <label>Not registered yet?</label><br/>
                        <button id="signUpBtn" onClick={this.signUpClicked}>Sign up</button>

                        
                    </div>
            </div>
        )
    }
}
