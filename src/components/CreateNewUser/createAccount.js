const createAccount = (userData) => {
    return fetch('/api/createAccount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: userData.email,
            username: userData.username,
            password: userData.password,
            confirmPass: userData.confirmPass
        })
    })
    .then(response => response.json())
    .then(json => json.errors);
}

module.exports = createAccount;