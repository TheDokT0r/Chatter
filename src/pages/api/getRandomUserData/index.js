import createRandomUserData from './CreateRandomUserData';

// Sends a response with a random user data object for testing purposes
async function handler(req, res) {
    const randomUserData = await createRandomUserData();

    await res.status(200).json(randomUserData);
}

export default handler;