import {
  Section,
  Img,
  Link,
  Tailwind
} from '@react-email/components';
import {
  SERVER_LOGO_URL,
  APP_NAME,
  SERVER_URL
} from '@/lib/constants';

export const EmailHeader = () => (
  <Tailwind>
    <Section className="w-full bg-blue-900 mt-2 p-4 rounded-t-lg shadow-md">
      <Link href={SERVER_URL}>
        <Img
          src={SERVER_LOGO_URL}
          width={150}
          height={75}
          alt={`${APP_NAME} logo`}
          className="rounded-xl shadow-md dark:shadow-gray-100 mx-4 my-3 pb-0"
        />
      </Link>
    </Section>
  </Tailwind>
);
