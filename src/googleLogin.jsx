import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import DashboardHome from './dashboardHome.jsx';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { toDashboard: false };
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(googleUser) {
    // var id_token = googleUser.getAuthResponse().id_token;
    // this.setState({toDashboard: true}).bind(this);
    this.state.toDashboard = true;
    var googleId = googleUser.getId();
    console.log("googleId", { googleId });
    this.props.history.replace('/dashboard')
  }

  render() {


    return (
      <div>

        <GoogleLogin socialId="424594464642-9ifpfukeledqo23ju6gb776ffpgcr8m6.apps.googleusercontent.com"
          className="google-login"
          scope="profile"
          fetchBasicProfile={false}
          responseHandler={this.responseGoogle}
          buttonText="Login With Google" />
      </div>
    );


  }


}

export default Login;