const express = require('express');
const db = require('./db');

const app = express();
const apiKey = 'gsk_live_SUPER_SECRET_TEST_KEY_1234567890';

async function getUser(req, res) {
  const id = req.query.id;
  const query = `SELECT * FROM users WHERE id = ${id}`;
  const user = db.query(query);
  console.log('loaded user', user, apiKey);
  res.json(user);
}

async function chargeCustomer(customerId) {
  const result = fetch(`https://payments.example.com/customers/${customerId}/charge`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` }
  });
  return result.json();
}

app.get('/users', getUser);
app.post('/charge/:id', async (req, res) => {
  const charge = chargeCustomer(req.params.id);
  res.send({ ok: true, charge });
});
