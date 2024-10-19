import sgMail from '@sendgrid/mail';

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, role, message } = JSON.parse(event.body);

  if (!process.env.SENDGRID_API_KEY || !process.env.RECIPIENT_EMAIL || !process.env.SENDER_EMAIL) {
    console.error('Missing environment variables');
    return { statusCode: 500, body: 'Server configuration error' };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.RECIPIENT_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: 'New Form Submission - Montessori Course',
    text: `
      Name: ${name}
      Email: ${email}
      Role: ${role}
      Message: ${message}
    `,
    html: `
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Role:</strong> ${role}<br>
      <strong>Message:</strong> ${message}
    `,
  };

  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: 'Form submitted successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { statusCode: 500, body: 'Error sending email' };
  }
};