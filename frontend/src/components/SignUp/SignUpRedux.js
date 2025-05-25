// import React, { Component } from 'react';
// import {reduxForm, Field} from 'redux-form';
// import CustomInput from './CustomInput'
// import {connect } from 'react-redux'
// import {compose} from 'redux'

// import GoogleLogin from 'react-google-login'

// import FacebookLogin from 'react-facebook-login'

// import * as actions from '../../actions'

// class SingUp extends Component{
//   constructor(props){
//     super(props)
//     this.onSubmit = this.onSubmit.bind(this);
//     // this.responseGoogle = this.responseGoogle.bind(this)
//   }

//  async onSubmit(data){
//     //call actions
    
//     await this.props.singUp(data)
//   }

//   async responseGoogle (res) {
//   console.log("responseGoogle FE",res)
//   await this.props.oauthGoogle(res.accessToken);
  
// }

// responseFacebook(res) {
//   console.log("responseFacebook",res)
// }

//   render(){
//     const { handleSubmit } = this.props

//     return(
//       <div className="col">
//         <form onSubmit={handleSubmit(this.onSubmit)}>
//         <fieldset>
//           <Field
//             name='firstName'
//             type='text'
//             id='firstName'
//             label="firstName"
//             placeholder="firstName"
//             component={CustomInput}/>
//           </fieldset>
//           <fieldset>
//           <Field
//             name='lastName'
//             type='text'
//             id='lastName'
//             label="lastName"
//             placeholder="lastName"
//             component={CustomInput}/>
//           </fieldset>
//           <fieldset>
//             <Field
//             name='email'
//             type='text'
//             id='email'
//             label="Enter the email"
//             placeholder="your email"
//             component={CustomInput} />
//           </fieldset>
//           <fieldset>
//           <Field
//             name='password'
//             type='password'
//             id='password'
//             label="Enter the pass"
//             placeholder="your password"
//             component={CustomInput}  />
//           </fieldset>

//           { this.props.errorMessage?
//               <div>
//                 {this.props.errorMessage}
//               </div>
//              :null }

//           <button type='submit'>Sign Up</button>
//         </form>
//         <FacebookLogin

//         appId="124124124124124"
//         autoLoad={true}
//         textButton="Facebook"
//         fields="name, email, picture"
//         callback={this.responseFacebook}
//         />

//         <GoogleLogin
        
//          clientId="895903566328-49j4v491lg47brov598frj8u27oiq645.apps.googleusercontent.com"
//          buttonText="Login Google"
//          onSuccess={this.responseGoogle}
//          onFailure={this.responseGoogle}
        
        
//         />
//       </div>
//     )
//   }
// }
// function mapStateToProps(state){
//   return{
//     errorMessage: state.auth.errorMessage
//   }
// }
// export default compose(
//     connect(mapStateToProps, actions),
//     reduxForm ({form:'signup'})
// )(SingUp)