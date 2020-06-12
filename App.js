// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class App extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN with FACEBOOK and GOOGLE</h1>

      <FacebookLogin
        appId="1059875397743760" //APP ID of the Facebook Login
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="427128050936-28c41m9nc8mkj57arrh6kmc7q4uhjhe7.apps.googleusercontent.com" //CLIENT ID of the Google Login
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default App;
