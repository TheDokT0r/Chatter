export default function handler(req, res) {
    let errors = [];
    const { email, username, password, confirmPassword } = req.body;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errors.push('Make sure your email is valid.');
    }

    if (username.length < 5) {
        errors.push('Username must have at least 5 chars.');
    }

    if (username.length > 20) {
        errors.push('Username too long! max have max of 20 chars.');
    }

    if (password.length < 8) {
        errors.push('Password must have at least 8 chars.');
    }

    if (password !== confirmPassword) {
        errors.push('Make sure your passwords match.');
    }

    if (password.length > 50) {
        errors.push("Bruh don't you think that's a bit too long?");
    }

    res.setHeader('Content-Type', 'text/plain');

    res.end(JSON.stringify({ errors: errors }));
}
