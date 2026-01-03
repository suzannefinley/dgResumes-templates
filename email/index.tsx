'use server';
import sendgrid from '@sendgrid/mail';
import { render } from '@react-email/components';
import { SENDER_EMAIL, APP_NAME } from '@/lib/constants';
import { ContactForm } from '@/types/contact';
import ResumeContactEmail from './resume-contact';

export const sendContactEmail = async (
  data: ContactForm,
  subscriberEmail: string
) => {
  try {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

    const emailHtml = await render(<ResumeContactEmail {...data} />);

    const options = {
      from: `${APP_NAME} <${SENDER_EMAIL}>`,
      to: `${subscriberEmail}`,
      subject: `New message from your dgResume contact form from: ${data.name}`,
      html: emailHtml
    };

    await sendgrid.send(options);

    return { error: null, success: true };
  } catch (error: Error | unknown) {
    console.error('Error sending Contact email:', error);
    return { error: (error as Error).message, success: false };
  }
};
