import React from 'react';
import {  Link } from 'react-router-dom';
import Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const { UserContext } = require("./validation");


function Login() {
  const [status, setStatus] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [disableSubmit, setDisableSubmit] = React.useState(true);
  const { useEffect } = React;
  const ctx = React.useContext(UserContext);
  const [currentUserIndex, setCurrentUserIndex] = React.useState(ctx.currentUserIndex);

  function handleLogout() {
    ctx.currentUserIndex = null;
    setCurrentUserIndex(ctx.currentUserIndex);
    console.log(`Logging out.`);
  }

  function handleLogin() {
    // Look up the user and make sure password is correct
    const users = ctx.users;
    let msg = 'Invalid name or password!'
    let found = false;
    for (const index in users) {
      console.log(`user: ${JSON.stringify(users[index])}, ${JSON.stringify(users)}`);

      if ((users[index]['name'] === userName) && (users[index]['password'] === userPassword)) {
        console.log(`It's a match!`);
        // Set the current user to the logged in user
        ctx.currentUserIndex = index;
        setCurrentUserIndex(ctx.currentUserIndex);
        found = true;
        break;
      }
    }
    if (found) {
      msg = `Welcome ${users[ctx.currentUserIndex]['name']}.`;
    }
    else {
      ctx.currentUserIndex = null;
      setCurrentUserIndex(ctx.currentUserIndex);
    };
  };

  useEffect(() => {
    console.log(`User: ${userName}, Password:${userPassword}`);
    if (userName && userPassword) {
      setDisableSubmit(false);
    }
    else {
      setDisableSubmit(true);
    }
  }, [userName, userPassword, currentUserIndex]);

  return (
    <Card>
    <Card.Header as="h3">Log In</Card.Header>
    <Card.Body>
      <Card.Text       status={status}>{
      currentUserIndex == null ? (
          <>
            Name: <br />
            <input type="input" placeholder="User name" value={userName} className="form-control" id="name" onChange={e => setUserName(e.currentTarget.value)} /><br />
            Password: <br />
            <input type="password" placeholder="Password" value={userPassword} className="form-control" id="password" onChange={e => setUserPassword(e.currentTarget.value)} /><br />
            <Button disabled={disableSubmit} type="submit"   onClick={handleLogin}>Log In</Button>
            <br/> 
            <br/>
            <Button as={Link} to={"/create"} variant="primary">Create Account</Button>

          </>
        ) : (
          <>
            Log In Sucessful
            <br/>
            <br/>

            Welcome, {ctx.users[ctx.currentUserIndex].name} !
            <br/>
            <br/>

            <Button as={Link} to={"/alldata"} minLength="4" variant="primary">Account Info</Button>
            <br/>            
            <br/>
            <Button as={Link} to={"/deposit"} minLength="8" variant="primary">Deposit</Button>
            <br/>
            <br/>

            <Button type="submit"  onClick={handleLogout} variant="primary">Logout</Button>

          </>
        )
        }
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Login;