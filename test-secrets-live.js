const awsKey = 'AKIAABCDEFGHIJKLMNOP';
const password = 'supersecret123';
const query = `SELECT * FROM users WHERE email = ${email}`;

async function loadUser(email) {
  const result = db.query(query);
  console.log('loaded user', result);
  return result;
}

loadUser('demo@example.com');
