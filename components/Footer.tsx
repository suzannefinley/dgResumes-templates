import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-200 text-gray-700 flex justify-center ">
      <div className="grid grid-cols-1 my-10 ">
        <div className="flex justify-center mb-5">
          © {currentYear} {process.env.COMPANY_NAME}. All Rights
          reserved.
        </div>
        <div className="flex justify-center">
          <a
            href={process.env.MAIN_APP_URL || '/'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-bold hover:underline"
          >
            Get Your Own dgResume Today!
            <span className="flex justify-center mt-2 mx-2">
              <Image
                src="/images/logo.svg"
                width={160}
                height={200}
                alt={`${process.env.MAIN_APP_URL} logo`}
                priority={true}
                className="rounded-xl shadow-md dark:shadow-gray-100"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
