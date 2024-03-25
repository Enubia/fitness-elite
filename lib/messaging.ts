import path from 'node:path';
import fs from 'node:fs';
import type { EventHandlerRequest, H3Event } from 'h3';
import nodemailer from 'nodemailer';
import mjml2html from 'mjml';
import { minify } from 'html-minifier-terser';
import type { Attachment } from 'nodemailer/lib/mailer';
import { envVariables as config } from './config';

export default class Messaging {
    private static get templatesWithAttachments() {
        return {
            contact: {
                template: fs.readFileSync(
                    path.resolve(process.cwd(), 'assets', 'email-templates', 'contact.mjml'),
                    'utf8',
                ),
                attachments: [
                    {
                        filename: 'logo.png',
                        path: path.resolve(process.cwd(), 'assets', 'images', 'logo.png'),
                        cid: 'logo',
                    },
                ],
            },
            questionnaire: {
                template: fs.readFileSync(
                    path.resolve(process.cwd(), 'assets', 'email-templates', 'questionnaire.mjml'),
                    'utf8',
                ),
                attachments: [
                    {
                        filename: 'logo.png',
                        path: path.resolve(process.cwd(), 'assets', 'images', 'logo.png'),
                        cid: 'logo',
                    },
                ],
            },
        };
    }

    private static async getTransport() {
        if (config.env === 'development' || config.env === 'test') {
            const account = await nodemailer.createTestAccount();

            if (account) {
                return nodemailer.createTransport({
                    host: account.smtp.host,
                    port: account.smtp.port,
                    auth: {
                        user: account.user,
                        pass: account.pass,
                    },
                });
            }
        } else {
            return nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: config.mail.address,
                    pass: config.mail.password,
                },
            });
        }
    }

    static async sendInternalMail(
        to: string,
        subject: string,
        html: string,
        attachments: Attachment[],
    ) {
        try {
            const transporter = await this.getTransport();

            if (!transporter) {
                return false;
            }

            if (transporter) {
                const mailOptions: nodemailer.SendMailOptions = {
                    from: config.mail.address,
                    to,
                    subject,
                    html,
                    attachments,
                };

                const data = await transporter.sendMail(mailOptions);

                if (!data) {
                    return false;
                }

                if (config.env === 'development') {
                    console.info(nodemailer.getTestMessageUrl(data));
                }

                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    static async sendContactFormMail(
        event: H3Event<EventHandlerRequest>,
        firstName: string,
        lastName: string,
        email: string,
        occupation: string,
        message: string,
    ) {
        const { errors, html } = mjml2html(this.templatesWithAttachments.contact.template);

        if (errors.length > 0) {
            console.error(errors);
            setResponseStatus(event, 500);
        }

        const minified = await minify(html);

        const body = minified.replace(/{{firstName}}/g, firstName)
            .replace(/{{lastName}}/g, lastName)
            .replace(/{{email}}/g, email)
            .replace(/{{occupation}}/g, occupation)
            .replace(/{{message}}/g, message);

        try {
            const success = await this.sendInternalMail(
                config.mail.address,
                occupation,
                body,
                this.templatesWithAttachments.contact.attachments,
            );

            if (!success) {
                setResponseStatus(event, 500);
            }
        } catch (error) {
            console.error(error);
            setResponseStatus(event, 500);
        }

        setResponseStatus(event, 200);
    }

    static async sendQuestionnaireMail(
        event: H3Event<EventHandlerRequest>,
        goal: string,
        challenge: string,
        result: string,
        name: string,
        email: string,
        phone: string,
        referrer: string,
    ) {
        const { errors, html } = mjml2html(this.templatesWithAttachments.questionnaire.template);

        if (errors.length > 0) {
            console.error(errors);
            setResponseStatus(event, 500);
        }

        const minified = await minify(html);

        const body = minified.replace(/{{goal}}/g, goal)
            .replace(/{{challenge}}/g, challenge)
            .replace(/{{result}}/g, result)
            .replace(/{{name}}/g, name)
            .replace(/{{email}}/g, email)
            .replace(/{{phone}}/g, phone)
            .replace(/{{referrer}}/g, referrer);

        try {
            const success = await this.sendInternalMail(
                config.mail.address,
                'Coaching Anfrage',
                body,
                this.templatesWithAttachments.questionnaire.attachments,
            );

            if (!success) {
                setResponseStatus(event, 500);
            }
        } catch (error) {
            console.error(error);
            setResponseStatus(event, 500);
        }

        setResponseStatus(event, 200);
    }
}
