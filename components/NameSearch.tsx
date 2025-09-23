'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

import 'dotenv/config';

const NameSearch = ({ noResumeUrl }: { noResumeUrl: string }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const fullUrl = noResumeUrl.includes('localhost')
    ? `http://${noResumeUrl}`
    : `https://${noResumeUrl}`;

  const handleSearch = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      router.push(`/?query=${inputValue}`);
    }
  };

  return (
    <>
      <div className="bg-primary-700 text-white p-4 justify-center text-center">
        <h2 className="mt-4 mb-2 text-xl font-semibold">
          A dgResume for
          <Link
            className="ml-1 font-bold text-blue-200"
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {fullUrl}
          </Link>{' '}
          is not available.
        </h2>
        <h2 className="mt-4 mb-2 text-2xl font-bold">
          Search for a dgResume by Name
        </h2>
        <p className="mb-4">
          Enter the name of the person whose dgResume you want to
          find.
        </p>
        <div className="flex justify-center">
          <div className="items-center  bg-white border border-gray-300 rounded-full py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 shadow-md w-60 focus-within:w-72">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search..."
              className="flex-grow  bg-transparent outline-white text-gray-700 placeholder-gray-400 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NameSearch;
