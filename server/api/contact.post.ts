export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // TODO: dummy log, will be replace with nodemailer implementation
    console.log(body);

    return new Response('OK', { status: 200 });
});
