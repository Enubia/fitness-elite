export const envVariables = {
    env: process.env.NODE_ENV || 'development',
    mail: {
        address: process.env.EMAIL_ADDRESS,
        password: process.env.APPLICATION_PASSWORD,
    },
};
