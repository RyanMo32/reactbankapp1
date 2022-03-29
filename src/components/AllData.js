import React from 'react';
import Card  from 'react-bootstrap/Card'
import { Table } from 'react-bootstrap';

const { UserContext } = require("./validation");

function AllData() {
  const ctx = React.useContext(UserContext);

  ctx.users.map((user) => {
    console.log(`${JSON.stringify(user)}`);
  });

  return (
      <Card>
    <Card.Text>
  <div class="card-header">
    <h4>Account Information</h4> 
  </div>
  <table class="card-table table">
    <thead>
      <tr>
        <th scope="col">User</th>
        <th scope="col">Email Password Balance</th>
      </tr>
    </thead>
    <tbody>
    {
            ctx.users.map((user) => {
              return(
                <>
      <tr>
        <td rowspan="3">{user.name}</td>
        <td>{user.email}</td>
      </tr>
      <tr>
        <td class="not-first-cell">{user.password}</td>
      </tr>
      <tr>
        <td class="not-first-cell">{user.balance}</td>
      </tr>
      </>)
                  })
                }

    </tbody>
  </table>
    </Card.Text>
</Card>

  );
}

export default AllData;