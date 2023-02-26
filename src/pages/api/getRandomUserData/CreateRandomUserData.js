import { faker } from '@faker-js/faker';

const createRandomUserData = () => {
    const username = faker.internet.userName();
    const password = faker.internet.password();
    const email = faker.internet.email();

    console.log(`username: ${username}, password: ${password}, email: ${email}`);

    return {
        username,
        password,
        email
    };
}

module.exports = createRandomUserData;
