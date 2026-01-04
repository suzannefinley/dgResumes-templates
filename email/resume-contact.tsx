import { ContactForm } from '@/types/contact';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Section,
  Tailwind,
  Text
} from '@react-email/components';
import { SERVER_EMAIL_LOGO_URL, APP_NAME } from '@/lib/constants';
import { EmailHeader } from './header';
import { EmailFooter } from './footer';

const ResumeContactEmail = (data: ContactForm) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-gray-200 text-gray-900">
          <Container className="max-w-xl">
            <EmailHeader />
            <Heading className="text-center text-lg mb-4">
              New Message from Your dgResume contact form
            </Heading>
            <Section>
              <Text>Name: {data.name}</Text>
              <Text>Email: {data.email}</Text>
              <Text>Message: {data.message}</Text>
            </Section>
            <EmailFooter />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResumeContactEmail;
