import express from 'express';
import sgMail from '@sendgrid/mail';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

if (!process.env.SENDGRID_API_KEY) {
  console.error('SENDGRID_API_KEY is not set. Please check your .env file.');
  process.exit(1);
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/submit-form', async (req, res) => {
  console.log('Received form submission:', req.body);
  const { name, email, role, message } = req.body;

  if (!process.env.RECIPIENT_EMAIL || !process.env.SENDER_EMAIL) {
    console.error('RECIPIENT_EMAIL or SENDER_EMAIL is not set. Please check your .env file.');
    return res.status(500).send('Server configuration error');
  }

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
    console.log('Email sent successfully');
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});