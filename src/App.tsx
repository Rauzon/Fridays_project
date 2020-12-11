import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav/Nav';
import {Login} from "./components/login/Login";
import { ErrorComponent } from './components/errorComponent/ErrorComponent';
import { NewPassword } from './components/newPassword/NewPassword';
import { SignUpComponent } from './components/signUpComponent/SignUpComponent';
import { PasswordResetComponent } from './components/PasswordReset/PasswordReset';
import { TestPageComponent } from './components/testComponent/TestPageComponent';

function App() {
  return (
    <div className="App">
        <Nav />
      <Route path={'login'} render={() => <Login />} />
      <Route path={'/sign-up'} render={() => <SignUpComponent />} />
      <Route path={'/profile'} render={() => <Login />} />
      <Route path={'/404'}  render={() => <ErrorComponent />} />
      <Route path={'/reset-password'} render={() => <PasswordResetComponent />} />
      <Route path={'/new-password'} render={() => <NewPassword />} />
      <Route path={'/test-page'} render={() => <TestPageComponent />} />
    </div>
  );
}

export default App;
