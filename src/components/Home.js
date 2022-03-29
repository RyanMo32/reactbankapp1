import pic from './welcome.png';
import Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {  Link } from 'react-router-dom';


function Home(){
  return (

    
    <Card>
  <Card.Header as="h3">Bad Bank International</Card.Header>
  <Card.Body>
    <Card.Title><h5>We might not be secure, but we are friendly!</h5></Card.Title>
    <Card.Text>

      <img src={pic} className="img-fluid" alt="Welcome to our bank"/>
    </Card.Text>
    <Button as={Link} to={"/create"} variant="primary">Create Account</Button>
    <br/>
    <br/>
    <Button as={Link} to={"/login"} variant="primary">Log In</Button>

  </Card.Body>
</Card>
  );  
}

export default Home;