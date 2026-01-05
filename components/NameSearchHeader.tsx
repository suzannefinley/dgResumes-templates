import Image from 'next/image';
import Link from 'next/link';
import {
  APP_NAME,
  SERVER_URL,
  SERVER_SIGNIN_URL
} from '@/lib/constants';
import 'dotenv/config';
import { Button } from './ui/button';
import { UserIcon, PersonStanding } from 'lucide-react';

const NameSearchHeader = () => {
  return (
    <header className="border-b bg-primary-900 text-white">
      <div className="flex items-center py-4 px-2 mr-6">
        <div className="flex items-center">
          <Link href={SERVER_URL} className="flex items-center">
            <Image
              src="/images/logos/logo.jpg"
              width={173}
              height={64}
              alt={`${APP_NAME} logo`}
              priority={true}
              className="rounded-xl shadow-md dark:shadow-gray-100 h-16 w-auto"
            />
            <span className="hidden sm:flex sm:font-semibold sm:text-1xl md:font-bold md:text-2xl ml-3 pl-2 text-nowrap">
              {`${APP_NAME} - Search`}
            </span>
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <div className="gap-8 flex">
            <Button
              asChild
              className="bg-gray-200 text-gray-900 hover:bg-gray-300 border-1 border-white rounded-xl"
            >
              <Link href={SERVER_SIGNIN_URL}>
                <UserIcon className="size-6" /> Sign In
              </Link>
            </Button>
            <Button
              asChild
              className="bg-[#d97706] rounded-xl text-primary-50 h5-semibold md:h6-semibold tracking-wider hover:bg-primary-600 text-primary-50 h5-semibold md:h6-semibold"
            >
              <a href={SERVER_URL + '#pricing' || '/'}>
                <PersonStanding className="size-6" /> Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NameSearchHeader;
