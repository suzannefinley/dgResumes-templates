'use client';
import './navy/assets/navy.css';
import { Roboto } from 'next/font/google';
import { Resume, PortfolioProject } from '@/types/resume';

import Image from 'next/image';
import bg from '@/public/images/templates/navy/navyHero.jpg';

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

import Reviews from './navy/components/Reviews';
import { Badge } from '@/components/ui/badge';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import ContactFormDialog from '@/components/ContactFormDialog';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
});

const Navy = ({
  resume,
  projects
}: {
  resume: Resume;
  projects: PortfolioProject[];
}) => {
  const bgImageAttribute = `Photo by <a href="https://unsplash.com/@dannypostma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danny Postma</a> on <a href="https://unsplash.com/photos/a-man-in-a-blue-shirt-smiling-at-the-camera-zNxOw2JFNKs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;

  const [showContactForm, setShowContactForm] = useState(false);
  const linkClasses = 'text-blue-800 underline text-sm font-semibold';

  const {
    experience,
    education,
    certifications,
    reviews,
    skills,
    awards,
    socialMedia
  } = setDataArrays(resume);

  //this will be used to decide the alternating background color
  //these need to be in the order they will appear on the page
  const sections = ['hero'];
  if (resume.introduction || resume.introVideo) {
    sections.push('about');
  }

  if (projects && projects.length > 0) {
    sections.push('projects');
  }

  if (skills && skills.length > 0) {
    sections.push('skills');
  }
  if (certifications && certifications.length > 0) {
    sections.push('certifications');
  }
  if (awards && awards.length > 0) {
    sections.push('awards');
  }
  if (reviews && reviews.length > 0) {
    sections.push('reviews');
  }
  if (experience && experience.length > 0) {
    sections.push('experience');
  }
  if (education && education.length > 0) {
    sections.push('education');
  }

  const socialMediaClasses =
    'w-5 h-5 text-primary-foreground hover:text-primary-300 transition-all duration-300 transform hover:-translate-y-1';

  const sectionClass1 = 'bg-primary-950 text-primary-50 py-5';
  const sectionClass2 = 'bg-white text-primary-900 py-5';
  const headingClass = 'mb-2 font-semibold text-xl';

  //document.documentElement.classList.add('navy-theme');

  return (
    <div className={`${roboto.className} navy-theme`}>
      <div className="bg-primary text-gray-50 transition-colors duration-300">
        {/* <!-- Sticky Navigation --> */}
        <nav className="fixed top-0 w-full bg-primary-50/80 backdrop-blur-md z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2">
              <div className="text-xl font-bold text-primary-800 items-center flex gap-2">
                <span className="w-8 h-8 flex items-center justify-center bg-primary-800 rounded-full sm:text-lg font-semibold text-white">
                  {resume.personalName?.slice(0, 1)}
                </span>
                {resume.personalName}
              </div>
              <div className="flex pr-4 mx-auto md:mr-6 gap-4 items-center justify-end">
                <a
                  href="#"
                  className="hover:text-blue-900 text-xl font-bold text-primary-800 transition-colors"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="bg-primary-900 text-primary-foreground relative pb-12 pt-16 lg:pb-20 lg:pt-20 undefined"
        >
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
              alt="blue gradient background"
            />
          </div>
          <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-col  gap-5  text-left py-6 pr-4 pl-8 rounded-xl mt-4 items-center justify-center bg-primary-200/40  backdrop-blur-md ">
              <div className="grid lg:grid-cols-2 gap-10 items-center m-2">
                <div className="text-center lg:text-left">
                  <h1 className="text-2xl md:text-4xl font-bold mb-6 text-primary-50">
                    Hi, I&#39;m {resume.personalName}
                  </h1>
                  <p className="text-xl md:text-2xl text-primary-100 mb-8">
                    {resume.tagLine}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2">
                    {projects && projects.length > 0 && (
                      <a
                        href="#projects"
                        className=" bg-gradient-to-br from-[#3bc14a] to-[#1ba82b] hover:to-[#11851e]  text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        View My Work
                      </a>
                    )}

                    <a
                      href="#"
                      className="border-2 border-secondary-600 text-primary-100 hover:bg-secondary-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      onClick={() => setShowContactForm(true)}
                    >
                      Get In Touch
                    </a>
                  </div>
                  {resume?.resumeUploadUrl || socialMedia ? (
                    <div className="flex flex-row gap-6 justify-center lg:justify-start mt-6">
                      {resume?.resumeUploadUrl && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <a
                              href={resume.resumeUploadUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaDownload
                                className={socialMediaClasses}
                              />
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
                          <FaLinkedin
                            className={socialMediaClasses}
                          />
                        </a>
                      )}
                      {socialMedia?.facebook && (
                        <a
                          href={socialMedia.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook
                            className={socialMediaClasses}
                          />
                        </a>
                      )}
                      {socialMedia?.github && (
                        <a
                          href={socialMedia.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className={socialMediaClasses} />
                        </a>
                      )}
                      {socialMedia?.x && (
                        <a
                          href={socialMedia.x}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaX className={socialMediaClasses} />
                        </a>
                      )}
                      {socialMedia?.youtube && (
                        <a
                          href={socialMedia.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaYoutube className={socialMediaClasses} />
                        </a>
                      )}
                      {socialMedia?.instagram && (
                        <a
                          href={socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram
                            className={socialMediaClasses}
                          />
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>
                <div
                  className="flex justify-center"
                  suppressHydrationWarning={true}
                >
                  <div
                    className="relative"
                    suppressHydrationWarning={true}
                  >
                    {resume.personalImageUrl ? (
                      <Image
                        src={
                          resume.personalImageUrl ??
                          '/default-profile.png'
                        }
                        width={288}
                        height={288}
                        alt={resume.personalName ?? 'Profile image'}
                        className="w-auto h-72 rounded-full object-cover shadow-2xl relative z-10 border-4 border-white"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        {resume.introduction || resume.introVideo ? (
          <section
            id="about"
            className={
              sections.indexOf('about') % 2 !== 0
                ? sectionClass1
                : sectionClass2
            }
          >
            <div className="max-w-7xl justify-center mx-auto px-4 sm:px-6 lg:px-8">
              <div
                suppressHydrationWarning={true}
                className="text-center mb-16"
              >
                <h3 className={headingClass}>About Me</h3>
                <div
                  suppressHydrationWarning={true}
                  className="text-lg gap-2 leading-relaxed space-y-6 border-1 border-primary-200/40 p-6 rounded-xl bg-primary-400/20  backdrop-blur-md text-primary-100"
                >
                  {resume.introduction ? (
                    <div>
                      <span
                        suppressHydrationWarning={true}
                        dangerouslySetInnerHTML={{
                          __html: resume.introduction || ''
                        }}
                      />
                    </div>
                  ) : null}
                  {resume.introVideo ? (
                    <div
                      className="flex justify-center"
                      suppressHydrationWarning={true}
                    >
                      <iframe
                        suppressHydrationWarning={true}
                        className="w-75 h-50 shadow-2xl relative z-10 border-4 border-white"
                        src={resume.introVideo}
                        allowFullScreen
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        ) : null}
        {/* <!-- Projects Section --> */}
        {projects && projects.length > 0 && (
          <section
            id="projects"
            suppressHydrationWarning
            className={
              sections.indexOf('projects') % 2 !== 0
                ? sectionClass1
                : sectionClass2
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center my-4">
                <h3 className={headingClass}>Featured Projects</h3>
                <p className="text-gray-600 text-lg">
                  Some of my recent work that I&#39;m proud to share
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects &&
                  projects.map(project => (
                    <div
                      key={project.projectId}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                    >
                      <div className="h-48 flex justify-center items-center bg-gradient-to-br from-blue-800 to-blue-200">
                        {project.projectImageUrl ? (
                          <Image
                            src={project.projectImageUrl}
                            alt={
                              project.projectName || 'Project image'
                            }
                            height={192}
                            width={192}
                            className="rounded-2xl m-1 h-42 w-auto object-cover shadow-md"
                          />
                        ) : null}
                      </div>
                      <div
                        className="px-6 py-2"
                        suppressHydrationWarning={true}
                      >
                        <h3 className="text-xl font-bold mb-1">
                          {project.projectName}
                        </h3>
                        {project.role && (
                          <h6 className="text-sm font-semibold">
                            {project.role}
                          </h6>
                        )}
                      </div>

                      {project.technologies && (
                        <div
                          className="px-6 mb-1 bg-white"
                          suppressHydrationWarning={true}
                        >
                          <span className="mr-1 font-semibold">
                            Technologies:
                          </span>
                          <span className="italic font-semibold">
                            {project.technologies}
                          </span>
                        </div>
                      )}

                      {project.description && (
                        <div className="px-6 mb-1">
                          <span
                            className="text-gray-600 mb-4"
                            dangerouslySetInnerHTML={{
                              __html: project.description || ''
                            }}
                            suppressHydrationWarning={true}
                          />
                        </div>
                      )}
                      <div
                        className="flex flex-row gap-3 px-6 pb-4"
                        suppressHydrationWarning={true}
                      >
                        {project.website && (
                          <a
                            suppressHydrationWarning={true}
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                          >
                            Website
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}
        {/* Skills section */}

        {skills && skills.length > 0 && (
          <section
            id="skills"
            suppressHydrationWarning
            className={
              sections.indexOf('skills') % 2 !== 0
                ? sectionClass1
                : sectionClass2
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center my-4">
                <h3 className={headingClass}>My Skills</h3>
              </div>
              <div className="flex justify-center  flex-wrap flex-row gap-8 p-6 mx-4">
                {skills &&
                  skills.map((s, index) => (
                    <div key={index}>
                      <div className="">
                        <Badge
                          variant="default"
                          className=" bg-gradient-to-br from-[#3bc14a] to-[#1ba82b] hover:to-[#11851e]  text-primary-100  px-4 py-2 text-2xl font-semibold"
                        >
                          <CircleCheckBig />{' '}
                          <span className="pl-1">{s.skill}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}
        {/* <!-- Certifications Section --> */}
        {certifications && certifications.length > 0 && (
          <section
            id="certifications"
            suppressHydrationWarning
            className={
              sections.indexOf('certifications') % 2 !== 0
                ? sectionClass1
                : sectionClass2
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className={headingClass}>My Certifications</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications &&
                  certifications.length > 0 &&
                  certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 mb-6"
                    >
                      <div className="p-2 sm:p-4 lg:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="text-xl md:text-2xl font-bold mb-1">
                          {cert.certificationName}

                          {cert.certificationDate && (
                            <h6 className="text-sm md:text-lg font-semibold mb-3">
                              {cert.certificationDate}
                            </h6>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}
        {/* <!-- Awards Section --> */}

        {awards && awards.length > 0 && (
          <section
            id="awards"
            suppressHydrationWarning
            className={
              sections.indexOf('awards') % 2 !== 0
                ? sectionClass1
                : sectionClass2
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className={headingClass}>My Awards and Honors</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards &&
                  awards.length > 0 &&
                  awards.map((award, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 mb-6 "
                    >
                      <div className="p-2 sm:p-4 lg:p-6 bg-white text-primary-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="text-xl md:text-2xl font-bold mb-1 flex flex-row items-center gap-4">
                          {award.awardName}

                          {award.awardDate && (
                            <div className="text-sm md:text-lg font-semibold">
                              {award.awardDate}
                            </div>
                          )}
                        </div>
                        {award.company && (
                          <div className="text-sm md:text-lg font-semibold mb-1">
                            {award.company}
                          </div>
                        )}
                        {award.description && (
                          <div className="text-lg md:text-xl font-semibold mb-3">
                            <span
                              suppressHydrationWarning
                              dangerouslySetInnerHTML={{
                                __html: award.description || ''
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* <!-- Reviews Section --> */}
        {reviews && reviews.length > 0 && (
          <section
            id="reviews"
            suppressHydrationWarning
            className={
              sections.indexOf('reviews') % 2 !== 0
                ? sectionClass1
                : sectionClass2
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-2">
                <h3 className={headingClass}>
                  What others say about me
                </h3>
              </div>

              <div className="justify-center flex">
                <Reviews reviews={reviews} />
              </div>
            </div>
          </section>
        )}

        {/* <!-- Experience Section --> */}
        {experience && experience.length > 0 && (
          <section
            id="experience"
            suppressHydrationWarning
            className={
              sections.indexOf('experience') % 2 !== 0
                ? sectionClass1
                : sectionClass2
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className={headingClass}>My Work Experience</h3>
              </div>

              <div className="flex-col flex-col-1  gap-8">
                {experience &&
                  experience.length > 0 &&
                  experience.map((job, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 lg:px-8 mb-6"
                    >
                      <div className="p-4 sm:p-6 lg:p-8 bg-white text-primary-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="text-xl md:text-2xl font-bold mb-1">
                          {job.title}
                        </div>
                        <div className="py-4">
                          {job.companyName && (
                            <h6 className="text-sm md:text-lg font-semibold mb-3">
                              Company: {job.companyName}
                            </h6>
                          )}
                        </div>
                        {job.startDate && (
                          <div className="flex flex-row gap-3">
                            <span className="text-gray-600">
                              {job.startDate}
                            </span>
                            <span className="text-gray-600">-</span>

                            {job.endDate ? (
                              <span className="text-gray-600">
                                {job.endDate}
                              </span>
                            ) : (
                              <span className="text-gray-600">
                                Current
                              </span>
                            )}
                          </div>
                        )}

                        {job.responsibilities && (
                          <div className="text-gray-600 mt-2 mb-4">
                            <span className="font-bold text-lg">
                              Responsibilities:
                            </span>
                            <span
                              suppressHydrationWarning
                              dangerouslySetInnerHTML={{
                                __html: job.responsibilities || ''
                              }}
                            />
                          </div>
                        )}
                        {job.achievements && (
                          <div className="text-gray-600 mt-2 mb-4">
                            <span className="font-bold text-lg">
                              Achievements:
                            </span>
                            <span
                              suppressHydrationWarning
                              dangerouslySetInnerHTML={{
                                __html: job.achievements || ''
                              }}
                            />
                          </div>
                        )}

                        <div className="flex flex-row gap-3">
                          {job.website && (
                            <a
                              href={job.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={linkClasses}
                            >
                              Website
                            </a>
                          )}
                          {job.github && (
                            <a
                              href={job.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={linkClasses}
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* <!-- Education Section --> */}
        {education && education.length > 0 && (
          <section
            id="education"
            suppressHydrationWarning
            className={
              sections.indexOf('education') % 2 !== 0
                ? sectionClass1
                : sectionClass2
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className={headingClass}>My Education</h3>
              </div>

              <div className="flex-col flex-col-1  gap-8">
                {education &&
                  education.length > 0 &&
                  education.map((school, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 lg:px-8 mb-6"
                    >
                      <div className="p-4 sm:p-6 lg:p-8 bg-white text-primary-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="text-xl md:text-2xl font-bold mb-1">
                          {school.institutionName}
                        </div>

                        {school.startDate && (
                          <div className="flex flex-row gap-3">
                            <span className="text-gray-700">
                              {school.startDate}
                            </span>
                            <span className="text-gray-700">-</span>

                            {school.endDate ? (
                              <span className="text-gray-700">
                                {school.endDate}
                              </span>
                            ) : (
                              <span className="text-gray-700">
                                Current
                              </span>
                            )}
                          </div>
                        )}

                        {school.description && (
                          <div className="text-gray-600 mt-2 mb-4">
                            <span
                              suppressHydrationWarning
                              dangerouslySetInnerHTML={{
                                __html: school.description || ''
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <ContactFormDialog
        email={resume.email ?? undefined}
        phone={resume.phone ?? undefined}
        open={showContactForm}
        onClose={() => setShowContactForm(false)}
        subscriberEmail={resume.subscriberEmail}
      />
    </div>
  );
};
export default Navy;
