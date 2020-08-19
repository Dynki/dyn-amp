// file: OAuthButton.js
import { withOAuth } from 'aws-amplify-react';
import React, { Component } from 'react';

class OAuthButton extends React.Component {
  handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('https://dynkisso.auth.eu-west-2.amazoncognito.com/oauth2/authorize?redirect_uri=http://localhost:3000&response_type=TOKEN&client_id=298df8huosb5k2mligrtl43o83');
  }

  render() {
    return (
      <div className='login'>
        <button onClick={this.handleClick}>Log back into application with O365</button>
      </div>
    )
  }
}

//export default OAuthButton;
export default withOAuth(OAuthButton);