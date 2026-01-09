import { headers } from 'next/headers';
import dynamic from 'next/dynamic';
import { Resume, PortfolioProject } from '@/types/resume';
import React from 'react';
import {
  getResumeByUrl,
  getProjectsByResumeId
  //getResumeByHostCdSubdomain
} from '@/lib/actions/resume.actions';
//import Header from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';
import NameSearch from '@/components/NameSearch';
import NameSearchResults from '@/components/NameSearchResults';
//import Footer from '@/components/Footer';
import NameSearchHeader from '@/components/NameSearchHeader';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  for (const [key, value] of headersList.entries()) {
    console.log(`${key}: ${value}`);
  }
  const rUrl: string = headersList.get('host') as string;
  const referer = headersList.get('referer') || '';
  console.log(`referer: ${referer}`);
  console.log(`domain for metadata: ${rUrl}`);
  const resume = await getResumeByUrl(rUrl);
  console.log('Generating metadata for:', rUrl, resume);

  if (resume) {
    try {
      return {
        title: resume
          ? `${resume.personalName} - dgResume`
          : 'dgResume',
        description: resume?.tagLine || 'Professional digital resume',
        keywords: `${resume.personalName} resume, dgResume, resume builder, digital resume,online resume, portfolio, cv, professional profile`,
        authors: resume
          ? [
              {
                name: resume.personalName || undefined,
                url: new URL(referer || '').toString()
              }
            ]
          : [
              {
                name: 'dgResume',
                url: new URL(referer || '').toString()
              }
            ],
        creator: 'dgResume',
        publisher: 'dgResume',
        icons: {
          icon: '/images/logos/icons/favicon.svg',
          shortcut: '/images/logos/icons/favicon.svg',
          apple: '/images/logos/icons/favicon.svg'
        },
        openGraph: {
          title: resume
            ? `${resume.personalName} - dgResume`
            : 'dgResume',
          description:
            resume?.tagLine || 'Professional digital resumes',
          url: new URL(referer || 'http://localhost:3000').toString(),
          siteName: 'dgResume',
          ...(resume?.subscriberAvatar && {
            images: resume.subscriberAvatar
          })
        },
        metadataBase: new URL(referer || 'http://localhost:3000')
      };
    } catch (error) {
      console.error('Error generating metadata:', error);
      return {
        title: 'dgResume',
        description: 'Professional digital resume'
      };
    }
  }

  try {
    return {
      title: 'dgResume',
      description: 'Professional digital resume',
      keywords:
        'dgResume, resume builder, digital resume, online resume, portfolio, cv, professional profile',
      authors: [{ name: 'dgResume', url: rUrl || '' }],
      creator: 'dgResume',
      publisher: 'dgResume',
      icons: {
        icon: '/images/logos/icons/favicon.svg',
        shortcut: '/images/logos/icons/favicon.svg',
        apple: '/images/logos/icons/favicon.svg'
      },
      openGraph: {
        title: 'dgResume',
        description: 'Professional digital resumes',
        url: rUrl || 'http://localhost:3000',
        siteName: 'dgResume'
      },
      metadataBase: new URL(rUrl || 'http://localhost:3000')
    };
  } catch (error) {
    console.error('Error generating default metadata:', error);
    return {
      title: 'dgResume',
      description: 'Professional digital resume'
    };
  }
}

export default async function Home() {
  const headersList = await headers();
  // for (const [key, value] of headersList.entries()) {
  //   console.log(`${key}: ${value}`);
  // }
  //const query = await searchParams;
  // console.log('Search query:', query);
  // console.log(query.dgr);

  // let hostCd = '';
  // let subdomain = '';

  // for (const [key, value] of Object.entries(query)) {
  //   console.log(`key: ${key}`);
  //   console.log(`value: ${value}`);
  //   hostCd = key;
  //   subdomain = Array.isArray(value) ? value[0] || '' : value || '';
  // }

  const rUrl: string = headersList.get('host') as string; // to get domain
  console.log(`domain: ${rUrl}`);

  const resume = await getResumeByUrl(rUrl);
  // const resume = await getResumeByHostCdSubdomain({
  //   hostCd: hostCd,
  //   subdomain: subdomain
  // });
  //console.log('resume:', resume);
  // only resumes of ACTIVE subscribers are returned
  // if no resume is found, show the NameSearch component
  // to allow searching by name

  if (!resume) {
    return (
      <div className="bg-primary-700 flex flex-col min-h-screen">
        <NameSearchHeader />
        <div className="flex flex-col my-16">
          <NameSearch noResumeUrl={rUrl} />
          <NameSearchResults />
        </div>
      </div>
    );
  }
  const projects = await getProjectsByResumeId(resume.resumeId);
  //console.log('projects:', projects);

  const template = resume.templateName;

  type TemplateProps = { resume: Resume } & {
    projects: PortfolioProject[];
  };

  const DynamicImport = dynamic(
    () =>
      import('@/templates/' + template) as Promise<{
        default: React.ComponentType<TemplateProps>;
      }>
  );

  return (
    <>
      <DynamicImport resume={resume} projects={projects} />
    </>
  );
}
