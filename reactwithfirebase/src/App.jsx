import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from "./firebase";
import SignupPage from './pages/Signup'
import { useState } from 'react';

import './App.css';

const auth = getAuth();


function App() {

  const signupUser = () => {
 createUserWithEmailAndPassword(
  auth,
  "dipesh@gmail.com",
  "Dipesh@123"
).then((value) => console.log(value))
  }

  return (
    <div className="App">
      <SignupPage/>
    </div>
  );
}

export default App;


