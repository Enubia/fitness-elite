import Messaging from '~/lib/messaging';

export default defineEventHandler(async (event) => {
    const { firstName, lastName, email, occupation, message } = await readBody(event);

    await Messaging.sendContactFormMail(event, firstName, lastName, email, occupation, message);
});
