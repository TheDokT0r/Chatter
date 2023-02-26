const checkForErrors = async (userData) => {
    const response = await fetch('/api/checkForSignUpErrors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: userData.email,
            username: userData.username,
            password: userData.password,
            confirmPass: userData.confirmPass
        })
    });

    const json = await response.json();
    return json.errors;
}

module.exports = checkForErrors;