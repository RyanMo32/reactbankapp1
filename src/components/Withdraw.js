import React from 'react';
import Card  from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../App.css';

const { UserContext } = require("./validation");


function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [withdrawAmount, setwithdrawAmount] = React.useState(null);
  const [disableSubmit, setDisableSubmit] = React.useState(true);
  const { useEffect } = React;
 
  let user = null;
  if (ctx.currentUserIndex) {
    user = ctx.users[ctx.currentUserIndex];
  };
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
  const [disableWithdrawAmount, setDisableWithdrawAmount] = React.useState(false);

  function handleWithdraw() {
    if (withdrawAmount <= balance) {
      let newBalance = parseFloat(balance) - parseFloat(withdrawAmount)
      setBalance(newBalance);
      ctx.users[ctx.currentUserIndex].balance = newBalance;
      setMessage('Transaction successful.');
    }
    else {
      const msg = 'Insufficient Funds';
      setMessage(msg);
    };
  };

  useEffect(() => {
    if (user) {
      if (withdrawAmount < 0) {
        setMessage(`Incorrect Value`);
        setDisableSubmit(true);
      }
      else if (withdrawAmount <= 0.0) {
        setMessage(`Incorrect Value`);
        setDisableSubmit(true);
      }
      else if (withdrawAmount > balance) {
        setMessage('Overdraft Warning - Insufficient Funds');
      }
      else {
        setMessage('');
        setDisableSubmit(false);
      }
    }
  }, [withdrawAmount]
  );
  return (
    <div>
    <Card>
  <Card.Header as="h3">Withdraw</Card.Header>
  <Card.Body>
    <Card.Text>
    {user ? (
        <>
            <div><h5>Current Balance:</h5></div>
            <div><h3>{"$ " + balance}</h3></div>
          <br/>
          <br/>
          Withdraw amount: 
          <br/>
          <input readOnly={disableWithdrawAmount} min="0" type="number" placeholder="Enter Amount" value={withdrawAmount} className="form-control" id="name" onChange={e => setwithdrawAmount(e.currentTarget.value)} /><br />
          <Button disabled={disableSubmit} type="submit" onClick={handleWithdraw} variant="primary">Withdraw</Button>
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

export default Withdraw;