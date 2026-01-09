import '../../globals.css';
import Image from 'next/image';
import { MAIN_APP_URL, SERVER_LOGO_URL } from '@/lib/constants';

const Disclaimer = () => {
  return (
    <>
      <div className="flex justify-left bg-blue-800 text-white p-4">
        <a
          href={MAIN_APP_URL || '/'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 font-bold hover:underline"
        >
          <span className="flex justify-center mt-2 mx-2">
            <Image
              src={SERVER_LOGO_URL}
              width={160}
              height={200}
              alt={`${process.env.MAIN_APP_URL} logo`}
              priority={true}
              className="rounded-xl shadow-md dark:shadow-gray-100"
            />
          </span>
        </a>
      </div>
      <div className="bg-gray-100 text-gray-900 p-8 mx-auto rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
        <p className="mb-4">Last updated: December 17, 2025</p>
        <h2 className="text-2xl font-bold mb-2">
          Interpretation and Definitions
        </h2>
        <h3 className="text-xl font-bold mb-2">Interpretation</h3>
        <p className="mb-4">
          The words whose initial letters are capitalized have
          meanings defined under the following conditions. The
          following definitions shall have the same meaning regardless
          of whether they appear in singular or in plural.
        </p>
        <h3 className="text-xl font-bold mb-2">Definitions</h3>
        <p>For the purposes of this Disclaimer:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Company</strong> (referred to as either &quot;the
            Company&quot;, &quot;We&quot;, &quot;Us&quot; or
            &quot;Our&quot; in this Disclaimer) refers to QuickDev
            Solutions LLC, 7706 N Country Space Loop.
          </li>
          <li>
            <strong>Service</strong> refers to the Website.
          </li>
          <li>
            <strong>You</strong> means the individual accessing the
            Service, or the company, or other legal entity on behalf
            of which such individual is accessing or using the
            Service, as applicable.
          </li>
          <li>
            <strong>Website</strong> refers to dgResume, accessible
            from{' '}
            <a
              href="https.*,dgresume.com"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://*.dgresume.com
            </a>
            and other domains owned by the Company.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Disclaimer</h2>
        <p className="mb-4">
          The information contained on the Service is for general
          information purposes only.
        </p>
        <p className="mb-4">
          The Company assumes no responsibility for errors or
          omissions in the contents of the Service.
        </p>
        <p className="mb-4">
          In no event shall the Company be liable for any special,
          direct, indirect, consequential, or incidental damages or
          any damages whatsoever, whether in an action of contract,
          negligence or other tort, arising out of or in connection
          with the use of the Service or the contents of the Service.
          The Company reserves the right to make additions, deletions,
          or modifications to the contents on the Service at any time
          without prior notice. This Disclaimer is subject to change
          at any time without notice.
        </p>
        <p className="mb-4">
          The Company does not warrant that the Service is free of
          viruses or other harmful components.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          External Links Disclaimer
        </h2>
        <p className="mb-4">
          The Service may contain links to external websites that are
          not provided or maintained by or in any way affiliated with
          the Company.
        </p>
        <p className="mb-4">
          Please note that the Company does not guarantee the
          accuracy, relevance, timeliness, or completeness of any
          information on these external websites.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Errors and Omissions Disclaimer
        </h2>
        <p className="mb-4">
          The information given by the Service is for provided by
          subscribers and is their specific resume data. The Company
          does not make any representations or warranties regarding
          the accuracy, completeness, or reliability of this
          information.
        </p>
        <p className="mb-4">
          The Company is not responsible for any errors or omissions,
          or for the results obtained from the use of this
          information.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Fair Use Disclaimer
        </h2>
        <p className="mb-4">
          The Company may use copyrighted material which has not
          always been specifically authorized by the copyright owner.
          The Company is making such material available for criticism,
          comment, news reporting, teaching, scholarship, or research.
        </p>
        <p className="mb-4">
          The Company believes this constitutes a &quot;fair use&quot;
          of any such copyrighted material as provided for in section
          107 of the United States Copyright law.
        </p>
        <p className="mb-4">
          If You wish to use copyrighted material from the Service for
          your own purposes that go beyond fair use, You must obtain
          permission from the copyright owner.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          Views Expressed Disclaimer
        </h2>
        <p className="mb-4">
          The Service may contain views and opinions which are those
          of the subscribers and do not necessarily reflect the
          official policy or position of any other subscriber, agency,
          organization, employer or company, including the Company.
        </p>
        <p className="mb-4">
          dgResumes published by users are their sole responsibility
          and the users will take full responsibility, liability and
          blame for any libel or litigation that results from
          something provided in their dgResumes. The Company is not
          liable for any content published by subscribers and reserves
          the right to delete any content for any reason whatsoever.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          No Responsibility Disclaimer
        </h2>
        <p className="mb-4">
          The information on the Service is provided with the
          understanding that the Company is not herein engaged in
          rendering legal, accounting, tax, or other professional
          advice and services. As such, it should not be used as a
          substitute for consultation with professional accounting,
          tax, legal or other competent advisers.
        </p>
        <p className="mb-4">
          In no event shall the Company or its suppliers be liable for
          any special, incidental, indirect, or consequential damages
          whatsoever arising out of or in connection with your access
          or use or inability to access or use the Service.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          &quot;Use at Your Own Risk&quot; Disclaimer
        </h2>
        <p className="mb-4">
          All information in the Service is provided &quot;as
          is&quot;, with no guarantee of completeness, accuracy,
          timeliness or of the results obtained from the use of this
          information, and without warranty of any kind, express or
          implied, including, but not limited to warranties of
          performance, merchantability and fitness for a particular
          purpose.
        </p>
        <p className="mb-4">
          The Company will not be liable to You or anyone else for any
          decision made or action taken in reliance on the information
          given by the Service or for any consequential, special or
          similar damages, even if advised of the possibility of such
          damages.
        </p>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Disclaimer, You can
          contact Us:
        </p>
        <ul>
          <li>By email: support@dgresumes.com</li>
        </ul>
      </div>
    </>
  );
};

export default Disclaimer;
