//create new account
const createAccount = async (req, res) => {
    const userData = req.body;
    const errors = await checkForErrors(userData);

    if (errors.length > 0) {
        res.status(200).json({ errors: errors });
    }
    else {
        res.status(200).json({ errors: [] });
    }
}