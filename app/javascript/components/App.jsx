import React from 'react';
import Login from './Login'
import SignUp from './SignUp'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginTop: '5rem'}}>
        {false && <Login />}
        <SignUp />
      </div>
    );
  }
}
