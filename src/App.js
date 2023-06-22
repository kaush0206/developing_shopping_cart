import React from "react";

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";




class App extends React.Component{
  handleChange = (e) =>{
    const{name, value} = e.target
    this.setState(
      {
        [name]: value
      }
    );
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
       this.onSignInSubmit();
       console.log("Recaptcha Verified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()

    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    
    const appVerifier = window.recaptchaVerifier;
    
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.Otp
    console.log(code)
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user))
  alert("User is verified")
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
  }
render(){
  return(
    <div>
      <h2>Login form</h2>
      <form onSubmit ={this.onSignInSubmit}>
        <div id  = "sign-in-button"></div>
        <input type = "number" name= "mobile" placeholder="Mobile Number" required onChange={this.handleChange}></input>
        <button type = "submit">Submit</button>
         </form >
         <h2>Enter OTP</h2>
         <form onSubmit ={this.onSubmitOTP}>
        <input type = "number" name= "Otp" placeholder="OTP number" required onChange={this.handleChange}></input>
        <button type = "submit">Submit</button>
         </form>
    </div>
  )
}
}
export default App