import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {  Link } from 'react-router-dom';
import useForm from './validation';

const { UserContext } = require("./validation");

function Create(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disableSubmit, setDisableSubmit] = React.useState(true);
  const ctx = React.useContext(UserContext);  
  const {useEffect} = React;

  function validate(field, label){
    if (!field) { 
      setDisableSubmit(true);
      return false;
    }
    return true;
}
  useEffect( () => {
    if (!validate(name,     'Name'))     return;
    if (!validate(email,    'Email'))    return;
    if (!validate(password, 'Password')) return;
    setDisableSubmit(false);
  }, [ctx.users,name,email,password] );

  function handleCreate(){
    if (!validate(name,     'Name'))     return;
    if (!validate(email,    'Email'))    return;
    if (!validate(password, 'Password')) return;
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }    

  const {handleChange, values, errors } = useForm();

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (

    <Card status={status}>
    <Card.Header as="h3">Create Account</Card.Header>
    <Card.Body>
      <Card.Text>
        {show ? (
      <>
              <input minLength="5" type="text" className="form-control" name="username" placeholder="Username" value={name} onChange={handleChange, e => setName(e.currentTarget.value)}/><br/>
              {
        errors.name && <h3>{errors.name}</h3>

      }
              <input minLength="8" type="email" className="form-control" name="email" placeholder="Email" value={email} onChange={handleChange, e => setEmail(e.currentTarget.value)}/><br/>
              {
        errors.email && <h3>{errors.email}</h3>
      }
              <input minLength="8" type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={handleChange, e => setPassword(e.currentTarget.value)}/><br/>

              <Button  disabled={disableSubmit} type="submit"  onClick={handleCreate}>Submit</Button>
              <br/>
              <br/>
              <Button as={Link} to={"/login"} variant="primary">Log In</Button>

              </>
            ):(
              <>
              <h5>Success</h5>
              <Button type="submit" onClick={clearForm}>Add another account</Button>
              <br/><br/>
              <Button as={Link} to={"/login"} variant="primary">Log In</Button>
              </>                    
             )}
            </Card.Text>
    </Card.Body>
  </Card>

  )
}

export default Create;