import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import 'dotenv/config';
import { Button } from './ui/button';
import { UserIcon, PersonStanding } from 'lucide-react';

const NameSearchHeader = () => {
  return (
    <header className="border-b bg-primary-900 text-white">
      <div className="flex items-center py-4 px-2 mr-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              priority={true}
              src={'/images/logo.svg'}
              color="red"
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden sm:flex sm:font-semibold sm:text-1xl md:font-bold md:text-2xl ml-3 text-nowrap">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <div className="gap-8 flex">
            <Button
              asChild
              className="bg-gray-200 text-gray-900 hover:bg-gray-300 border-1 border-white rounded-xl"
            >
              <Link href={`${process.env.NEXTAUTH_URL}/login`}>
                <UserIcon className="size-6" /> Sign In
              </Link>
            </Button>
            <Button
              asChild
              className="bg-[#d97706] rounded-xl text-primary-50 h5-semibold md:h6-semibold tracking-wider hover:bg-primary-600 text-primary-50 h5-semibold md:h6-semibold"
            >
              <a href={process.env.MAIN_APP_URL + '#pricing' || '/'}>
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
