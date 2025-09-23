'use server';
import { Resend } from 'resend';
import { SENDER_EMAIL, APP_NAME } from '@/lib/constants';
import { ContactForm } from '@/types/contact';
import ResumeContactEmail from './resume-contact';

export const sendContactEmail = async (
  data: ContactForm,
  subscriberEmail: string
) => {
  const resend = new Resend(process.env.RESEND_API_KEY as string);

  await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: [SENDER_EMAIL, subscriberEmail],
    subject: `New message from your dgResume contact form from: ${data.name}`,
    react: <ResumeContactEmail {...data} />
  });
};
