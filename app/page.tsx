import { headers } from 'next/headers';
import dynamic from 'next/dynamic';
import { Resume, PortfolioProject } from '@/types/resume';
import React from 'react';
import {
  getResumeByUrl,
  getProjectsByResumeId
} from '@/lib/actions/resume.actions';
//import Header from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'my resume'
  //description: '{resume.tagline}'
};

export default async function Home() {
  const headersList = await headers();

  const rUrl: string = headersList.get('host') as string; // to get domain
  console.log(`domain: ${rUrl}`);

  const resume = await getResumeByUrl(rUrl);
  //console.log('resume:', resume);

  const projects = await getProjectsByResumeId(resume.resumeId);
  //console.log('projects:', projects);

  const template = resume.templateName;
  if (resume) {
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
  } else {
    return <div>No Resume</div>;
  }
}
