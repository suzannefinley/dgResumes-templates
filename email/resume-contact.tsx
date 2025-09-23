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
import 'dotenv/config';

const ResumeContactEmail = (data: ContactForm) => {
  const AppUrl = process.env.APP_URL;
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className="font-sans bg-gray-200 text-gray-900">
          <Container className="max-w-xl">
            <Heading>
              <Img
                src={`${AppUrl}/public/images/logo.svg`}
                width="150"
                height="50"
                alt="dgResume Logo"
                className="mx-auto mb-4"
              />
            </Heading>
            <Heading className="text-center text-lg mb-4">
              New Message from Your dgResume contact form
            </Heading>
            <Section>
              <Text>Name: {data.name}</Text>
              <Text>Email: {data.email}</Text>
              <Text>Message: {data.message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ResumeContactEmail;
