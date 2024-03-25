import Messaging from '~/lib/messaging';

export default defineEventHandler(async (event) => {
    const { goal, challenge, result, name, email, phone, referrer } = await readBody(event);

    await Messaging.sendQuestionnaireMail(event, goal, challenge, result, name, email, phone, referrer);
});
