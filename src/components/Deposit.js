import React from 'react';
import '../App.css';
import Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const { UserContext } = require("./validation");


function Deposit() {
  const ctx = React.useContext(UserContext);
  const [deposit, setDeposit] = React.useState(null);
  const [disableSubmit, setDisableSubmit] = React.useState(true);
  const { useEffect } = React;

  let user = null;
  if (ctx.currentUserIndex) {
    user = ctx.users[ctx.currentUserIndex];
  }
  let userBalance = null;
  let userStatus = '';
  if (user) {
    userBalance = user.balance;
  }
  else {
    userStatus = '';
  }
  const [message, setMessage] = React.useState(userStatus);
  const [balance, setBalance] = React.useState(userBalance);
  const [disableDepositAmount, setDisableDepsoitAmount] = React.useState(false);

  function handleDeposit() {
    if (deposit >= 0) {
      let newBalance = parseFloat(balance) + parseFloat(deposit)
      setBalance(newBalance);
      ctx.users[ctx.currentUserIndex].balance = newBalance;
      setMessage(`Successful Deposit`)
    }else {
      const message1 = 'Error. Please Try Again.';
      setMessage(message1);
    }
  }

  useEffect(() => {
    if (user) {
      if (deposit< 0) {
        setMessage(`Incorrect Value`);
        setDisableSubmit(true);
      }
      else if (deposit <= 0.0) {
        setMessage(`Incorrect Value`);
        setDisableSubmit(true);
      }
      else {
        setMessage('');
        setDisableSubmit(false);
      }
    }
  }, [deposit]
  );

  return (
    <div>

    <Card>
  <Card.Header as="h3">Deposit</Card.Header>
  <Card.Body>
    <Card.Text >
    {user ? (
        <>
            <div><h5>Current Balance:</h5></div>
            <div><h3>{"$ " + balance}</h3></div>
          <br/>
          <br/>
          Deposit amount: 
          <br/>
          <input readOnly={disableDepositAmount} min="0" type="number"  value={deposit} className="form-control" id="name" onChange={e => setDeposit(e.currentTarget.value)} /><br />
          <Button disabled={disableSubmit} type="submit"  onClick={handleDeposit} variant="primary">Deposit</Button>

        </>
      ) : ("No user selected")
      }
    </Card.Text>
    {message && <h5>{message}</h5>}
  </Card.Body>
</Card>
</div>
  )
}

export default Deposit;