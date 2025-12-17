'use client';
import { Resume, PortfolioProject } from '@/types/resume';

import Image from 'next/image';
import bg from '@/public/images/templates/ocean/oceanHero.jpg';
//import './ocean/ocean.css';
//import { setDataArrays } from '@/lib/helpers/setDataArrays';
import { useState } from 'react';
import { setDataArrays } from '@/lib/helpers/setDataArrays';

import { CircleCheckBig } from 'lucide-react';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaX,
  FaDownload
} from 'react-icons/fa6';

import SectionHeader from './ocean/components/shared/SectionHeader';
import Portfolio from './ocean/components/Portfolio';
import { Badge } from '@/components/ui/badge';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import ContactFormDialog from '@/components/ContactFormDialog';

const Ocean = ({
  resume,
  projects
}: {
  resume: Resume;
  projects: PortfolioProject[];
}) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const linkClasses = 'text-blue-800 underline text-sm font-semibold';

  const demoImageAttribution =
    'Photo by <a href="https://unsplash.com/@ibidsy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clay Elliot</a> on <a href="https://unsplash.com/photos/woman-in-red-cardigan-smiling-mpDV4xaFP8c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

  const imageAlt = resume.personalName?.includes('Demo ')
    ? demoImageAttribution
    : resume.personalName!;

  const {
    experience,
    education,
    certifications,
    reviews,
    skills,
    awards,
    socialMedia
  } = setDataArrays(resume);

  return (
    <>
      <div className="bg-white text-gray-900 transition-colors duration-300">
        {/* <!-- Sticky Navigation --> */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2">
              <div className="text-xl font-bold text-primary-600 items-center flex gap-2">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full sm:text-lg font-semibold text-white">
                  {resume.personalName?.slice(0, 1)}
                </span>
                {resume.personalName}
              </div>
              <div className="flex pr-4 mx-auto md:mr-6 gap-4 items-center justify-end">
                <a
                  href="#"
                  className="hover:text-blue-900 text-xl font-bold text-primary-600 transition-colors"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-blue-800 relative pb-12 pt-16 lg:pb-20 lg:pt-20 mb-6 undefined">
          <div className="absolute bottom-0 left-0 right-0 top-0 brightness-[90%]">
            <Image
              src={bg}
              className="object-cover"
              sizes="100vw"
              quality={100}
              placeholder="blur"
              fill
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent'
              }}
              alt="Ocean waves with rocks"
            />
          </div>
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-col  gap-5  text-left py-6 px-4 rounded-xl  items-center justify-center bg-blue-200/40  backdrop-blur-md text-blue-900">
              <div className="flex flex-col md:flex-row gap-15 items-center justify-center">
                {resume.personalImageUrl && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex my-2 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <Image
                          src={resume.personalImageUrl}
                          alt={imageAlt}
                          width={150}
                          height={150}
                          className="w-50 h-50 rounded-full object-cover border-1 border-gray-300 relative "
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p
                        dangerouslySetInnerHTML={{ __html: imageAlt }}
                        suppressHydrationWarning={true}
                      />
                    </TooltipContent>
                  </Tooltip>
                )}
                {resume.introVideo && (
                  <div className="flex  my-2">
                    <iframe
                      className="w-60 h-50 shadow-2xl relative z-10 border-1 border-gray-300  rounded-lg"
                      src={resume.introVideo}
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
              <div className="mb-2 text-center md:text-left">
                <span className=" flex text-1xl sm:text-2xl font-bold pb-2  ">
                  {resume.tagLine}
                </span>
                <span
                  className="text-gray-800 mb-4 text-xl"
                  dangerouslySetInnerHTML={{
                    __html: resume.introduction || ''
                  }}
                  suppressHydrationWarning={true}
                />
              </div>
              {resume?.resumeUploadUrl || socialMedia ? (
                <div className="flex flex-row gap-6 justify-center items-center  mt-6">
                  <span className="hidden sm:flex text-xl">
                    Find me:
                  </span>
                  {resume?.resumeUploadUrl && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={resume.resumeUploadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaDownload className="w-5 h-5  text-gray-600 hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Download my CV</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                  {socialMedia?.linkedin && (
                    <a
                      href={socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="w-5 h-5 text-gray-600  hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1" />
                    </a>
                  )}
                  {socialMedia?.facebook && (
                    <a
                      href={socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="w-5 h-5 text-gray-600  hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1" />
                    </a>
                  )}
                  {socialMedia?.github && (
                    <a
                      href={socialMedia.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-5 h-5  text-gray-600  hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1" />
                    </a>
                  )}
                  {socialMedia?.x && (
                    <a
                      href={socialMedia.x}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaX className="w-5 h-5  text-gray-600  hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1" />
                    </a>
                  )}
                  {socialMedia?.youtube && (
                    <a
                      href={socialMedia.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="w-5 h-5  text-gray-600  hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1" />
                    </a>
                  )}
                  {socialMedia?.instagram && (
                    <a
                      href={socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5  text-gray-600  hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1" />
                    </a>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </section>
        {/* Skills section */}
        <section>
          {skills && skills.length > 0 ? (
            <section className="bg-gray-100 py-6 mb-6">
              <SectionHeader label="My Skills" />
              <div className="flex justify-start flex-wrap flex-row gap-8 p-6 mx-4">
                {skills &&
                  skills.map((s, index) => (
                    <div key={index}>
                      <div className="">
                        <Badge
                          variant="default"
                          className="bg-primary-700 text-primary-100  px-4 py-2 text-2xl font-semibold"
                        >
                          <CircleCheckBig />{' '}
                          <span className="pl-1">{s.skill}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ) : null}
        </section>
        {/* projects section */}
        {projects && projects.length > 0 ? (
          <Portfolio portfolio={projects} />
        ) : null}
        {/* Reviews Section */}
        {reviews && reviews.length > 0 ? (
          <section>
            <SectionHeader label="What others are saying about me" />
            <div className="flex flex-wrap gap-4 p-6 justify-center text-lg">
              {reviews.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 flex-grow text-gray-900 border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
                  >
                    <span className="flex font-semibold text-lg ">
                      {item.reviewName}
                    </span>
                    {item.company ? (
                      <span className="flex mb-2">
                        <span className="text-gray-500 pr-1">
                          {item.company}
                        </span>
                      </span>
                    ) : null}
                    {item.reviewDate ? (
                      <span className="flex mb-2">
                        <span className="text-gray-500 pr-1">
                          {item.reviewDate}
                        </span>
                      </span>
                    ) : null}
                    {item.comment ? (
                      <span className="block mb-2">
                        <span className="font-semibold text-md pr-1">
                          Comment:
                        </span>
                        <span
                          className="text-gray-600 dark:text-gray-300 mb-4"
                          dangerouslySetInnerHTML={{
                            __html: item.comment || ''
                          }}
                          suppressHydrationWarning={true}
                        />
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}
        {/* Certifications Section */}
        {certifications && certifications.length > 0 ? (
          <section>
            <SectionHeader label="My Certifications" />
            <div className="flex flex-wrap gap-4 p-6 justify-center text-lg">
              {certifications.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 flex-grow text-gray-900 border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
                  >
                    <span className="flex font-semibold text-lg ">
                      {item.certificationName}
                    </span>

                    {item.certificationDate ? (
                      <span className="flex mb-2">
                        <span className="text-gray-500 pr-1">
                          {item.certificationDate}
                        </span>
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}
        {/* Awards Section */}
        {awards && awards.length > 0 ? (
          <section>
            <SectionHeader label="Awards I have earned" />
            <div className="flex flex-wrap gap-4 p-6 justify-center text-lg">
              {awards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 flex-grow text-gray-900 border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
                  >
                    <span className="flex font-semibold text-lg ">
                      {item.awardName}
                    </span>

                    {item.awardDate ? (
                      <span className="flex mb-2">
                        <span className="text-gray-500 pr-1">
                          {item.awardDate}
                        </span>
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}
        {/* Experience Section */}
        {experience && experience.length > 0 ? (
          <section>
            <SectionHeader label="My Experience" />
            <div className="flex flex-wrap gap-4 p-6 justify-center text-lg">
              {experience.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 flex-grow text-gray-900 border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
                  >
                    <span className="block font-semibold text-lg ">
                      {item.companyName}
                    </span>
                    {item.startDate && item.endDate ? (
                      <span className="block mb-2">
                        <span className="text-gray-500 pr-1">
                          {item.startDate}
                        </span>
                        <span>-</span>
                        <span className="text-gray-500 pl-1">
                          {item.endDate}
                        </span>
                      </span>
                    ) : null}
                    {item.achievements ? (
                      <span className="block mb-2">
                        <span className="font-semibold text-md pr-1">
                          Achievements:
                        </span>
                        <span
                          className="text-gray-600 dark:text-gray-300 mb-4"
                          dangerouslySetInnerHTML={{
                            __html: item.achievements || ''
                          }}
                          suppressHydrationWarning={true}
                        />
                      </span>
                    ) : null}
                    {item.responsibilities ? (
                      <span className="block mb-2">
                        <span className="font-semibold text-md pr-1">
                          Responsibilites:
                        </span>
                        <span
                          className="text-gray-600 dark:text-gray-300 mb-4"
                          dangerouslySetInnerHTML={{
                            __html: item.responsibilities || ''
                          }}
                          suppressHydrationWarning={true}
                        />
                      </span>
                    ) : null}
                    {item.website ? (
                      <span className="inline-block mb-2 pr-4">
                        <a
                          className={linkClasses}
                          href={item.website}
                          target="_blank"
                        >
                          Company Website
                        </a>
                      </span>
                    ) : null}
                    {item.github ? (
                      <span className="mb-2">
                        <a
                          className={linkClasses}
                          href={item.github}
                          target="_blank"
                        >
                          github repo
                        </a>
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}
        {/* Education Section */}
        {education && education.length > 0 ? (
          <section>
            <SectionHeader label="My Education" />
            <div className="flex flex-wrap gap-4 p-6 justify-center text-lg">
              {education.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 flex-grow text-gray-900 border-l-8 border-blue-500 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12"
                  >
                    <span className="block font-semibold text-lg ">
                      {item.institutionName}
                    </span>
                    {item.startDate && item.endDate ? (
                      <span className="block mb-2">
                        <span className="text-gray-500 pr-1">
                          {item.startDate}
                        </span>
                        <span>-</span>
                        <span className="text-gray-500 pl-1">
                          {item.endDate}
                        </span>
                      </span>
                    ) : null}
                    {item.degree ? (
                      <span className="block mb-2">
                        <span className="font-semibold text-md pr-1">
                          Degree:
                        </span>
                        <span className="block font-semibold text-lg ">
                          {item.degree}
                        </span>
                      </span>
                    ) : null}
                    {item.description ? (
                      <span className="block mb-2">
                        <span className="font-semibold text-md pr-1">
                          Description:
                        </span>
                        <span
                          className="text-gray-600 dark:text-gray-300 mb-4"
                          dangerouslySetInnerHTML={{
                            __html: item.description || ''
                          }}
                          suppressHydrationWarning={true}
                        />
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}
      </div>
      <ContactFormDialog
        email={resume.email ?? undefined}
        phone={resume.phone ?? undefined}
        open={showContactForm}
        onClose={() => setShowContactForm(false)}
        subscriberEmail={resume.subscriberEmail}
      />
    </>
  );
};

export default Ocean;
