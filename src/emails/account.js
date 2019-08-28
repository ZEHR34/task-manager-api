const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'TaskManager@MSLab.com',
        subject: 'Thanks for joining :)',
        text: `Welcome to The App,${name}.hope the app meet your needs`,

    };
    sgMail.send(msg);

}
const sendCancelationEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'TaskManager@MSLab.com',
        subject: 'Sorry to see you go! :(',
        text: `Goodbye, ${name}. We hope to see you again `,

    };
    sgMail.send(msg);

}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}