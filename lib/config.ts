export const envVariables = {
    env: String(process.env.NODE_ENV),
    mail: {
        smtpHost: String(process.env.SMTP_HOST),
        smtpPort: Number(process.env.SMTP_PORT),
        address: String(process.env.EMAIL_ADDRESS),
        password: String(process.env.APPLICATION_PASSWORD),
    },
};
