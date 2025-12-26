'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getResumesByPersonalName } from '@/lib/actions/resume.actions';
import Link from 'next/link';

const fetchData = async (query: string | null) => {
  if (!query) return [];
  const results = await getResumesByPersonalName(query);
  return results;
};

const NameSearchResults = () => {
  console.log('NameSearchResults component rendered');
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState<
    { title: string | null; url: string | null }[]
  >([]);

  //console.log('query:', query);
  console.log('results:', results);

  useEffect(() => {
    const loadData = async () => {
      console.log('Loading data for query:', query);
      const data = await fetchData(query);
      setResults(data);
    };
    loadData();
  }, [query]);

  return (
    <div className="bg-primary-700 min-h-full text-white p-4 justify-center text-center">
      {results.length > 0 ? (
        <div>
          <p className="text-xl font-semibold mb-4">
            The following dgResume(s) matched your search:
          </p>
          <ul>
            {results.map(
              (item, index) => (
                console.log('item:', item),
                (
                  <li key={index} className="mb-2">
                    <Link
                      className="mr-1 font-bold text-blue-200 underline"
                      href={
                        item.url?.includes('localhost')
                          ? `http://${item.url}`
                          : `https://${item.url}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.url?.includes('localhost')
                        ? `http://${item.url}`
                        : `https://${item.url}`}
                    </Link>
                    {item.title}
                  </li>
                )
              )
            )}
          </ul>
        </div>
      ) : (
        <p className="text-xl font-semibold mb-4">
          No results matched your search. Please try again.
        </p>
      )}
    </div>
  );
};

export default NameSearchResults;
