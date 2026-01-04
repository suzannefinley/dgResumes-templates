import {
  Section,
  Img,
  Text,
  // Row,
  // Column,
  Link,
  Tailwind
} from '@react-email/components';
import {
  BUSINESS_ADDRESS,
  SUPPORT_EMAIL,
  COMPANY_NAME,
  APP_DESCRIPTION,
  APP_NAME,
  SERVER_URL,
  SERVER_EMAIL_LOGO_URL
} from '@/lib/constants';

export const EmailFooter = () => (
  <Tailwind>
    <Section className="text-center">
      <table className="w-full">
        <tr className="w-full">
          <td align="center">
            <Link href={SERVER_URL}>
              <Img
                src={SERVER_EMAIL_LOGO_URL}
                width={150}
                height={75}
                alt={`${APP_NAME} logo`}
                className="cursor-pointer rounded-xl shadow-md dark:shadow-gray-100 mx-4 my-3 pb-0"
              />
            </Link>
          </td>
        </tr>
        <tr className="w-full">
          <td align="center">
            <Text className="my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]">
              {COMPANY_NAME}
            </Text>
            <Text className="mt-[4px] mb-0 text-[16px] text-gray-500 leading-[24px]">
              {APP_DESCRIPTION}
            </Text>
          </td>
        </tr>
        {/* <tr>
          <td align="center">
            <Row className="table-cell h-[44px] w-[56px] align-bottom">
              <Column className="pr-[8px]">
                <Link href="#">
                  <Img
                    alt="Facebook"
                    height="36"
                    src="https://react.email/static/facebook-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
              <Column className="pr-[8px]">
                <Link href="#">
                  <Img
                    alt="X"
                    height="36"
                    src="https://react.email/static/x-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
              <Column>
                <Link href="#">
                  <Img
                    alt="Instagram"
                    height="36"
                    src="https://react.email/static/instagram-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
            </Row>
          </td>
        </tr> */}
        <tr>
          <td align="center">
            <Text className="my-[8px] font-semibold text-[16px] text-gray-500 leading-[24px]">
              {BUSINESS_ADDRESS}
            </Text>
            <Text className="mt-[4px] mb-0 font-semibold text-[16px] text-gray-500 leading-[24px]">
              {SUPPORT_EMAIL}
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  </Tailwind>
);
