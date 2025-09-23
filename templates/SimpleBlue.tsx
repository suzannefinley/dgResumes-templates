'use client';
import './simpleblue/simpleblue.css';
import { useState } from 'react';
import { Resume, PortfolioProject } from '@/types/resume';
import Image from 'next/image';
//import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';

//import Link from 'next/link';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaX,
  FaDownload
} from 'react-icons/fa6';
import ModeToggle from '@/components/ModeToggle';

import { setDataArrays } from '@/lib/helpers/setDataArrays';
import ContactFormDialog from '@/components/ContactFormDialog';

const SimpleBlue = ({
  resume,
  projects
}: {
  resume: Resume;
  projects: PortfolioProject[];
}) => {
  //let count = 1;

  const [showContactForm, setShowContactForm] = useState(false);

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

  if (projects && projects.length > 0) {
    sections.push('projects');
  }
  if (resume.introduction) {
    sections.push('about');
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

  //console.log('resume:', resume);
  // console.log('SimpleBlue projects:', projects);
  //const originalDesign = 'Rathanak Phan';
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* <!-- Sticky Navigation --> */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold text-primary-600 dark:text-blue-300">
                {resume.personalName}
              </div>
              <div className="hidden lg:flex space-x-6 justify-items-center items-center">
                <a
                  href="#hero"
                  className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                >
                  Home
                </a>
                {projects && projects.length > 0 && (
                  <a
                    href="#projects"
                    className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                  >
                    Projects
                  </a>
                )}
                {resume.introduction && (
                  <a
                    href="#about"
                    className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                  >
                    About
                  </a>
                )}
                {Array.isArray(resume.skills) &&
                  resume.skills.length > 0 && (
                    <a
                      href="#skills"
                      className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                    >
                      Skills
                    </a>
                  )}
                {Array.isArray(resume.certifications) &&
                  resume.certifications.length > 0 && (
                    <a
                      href="#certifications"
                      className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                    >
                      Certifications
                    </a>
                  )}
                {Array.isArray(resume.awards) &&
                  resume.awards.length > 0 && (
                    <a
                      href="#awards"
                      className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                    >
                      Awards
                    </a>
                  )}

                {Array.isArray(resume.reviews) &&
                  resume.reviews.length > 0 && (
                    <a
                      href="#reviews"
                      className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                    >
                      Reviews
                    </a>
                  )}
                {Array.isArray(resume.experience) &&
                  resume.experience.length > 0 && (
                    <a
                      href="#experience"
                      className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                    >
                      Experience
                    </a>
                  )}
                {Array.isArray(resume.education) &&
                  resume.education.length > 0 && (
                    <a
                      href="#education"
                      className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                    >
                      Education
                    </a>
                  )}
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact
                </a>
                <ModeToggle />
              </div>
              <div className="lg:hidden flex mx-4 gap-4 items-center justify-end">
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-200 transition-colors"
                  onClick={() => setShowContactForm(true)}
                >
                  Contact
                </a>

                <ModeToggle />
              </div>
            </div>
          </div>
        </nav>

        {/* <!-- Hero Section --> */}
        <section
          id="hero"
          className="h-[calc(100vh-100px)] flex items-center justify-center "
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-2xl md:text-6xl font-bold mb-6 text-primary-600  dark:text-blue-600">
                  Hi, I&#39;m {resume.personalName}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                  {resume.tagLine}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2">
                  <a
                    href="#projects"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    View My Work
                  </a>
                  <a
                    href="#"
                    className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    onClick={() => setShowContactForm(true)}
                  >
                    Get In Touch
                  </a>
                </div>
                <div className="flex flex-row gap-6 justify-center lg:justify-start mt-6">
                  {resume?.resumeUploadUrl && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href={resume.resumeUploadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaDownload className="w-5 h-5  text-gray-600 dark:text-gray-300 hover:underline" />
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
                      <FaLinkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:underline" />
                    </a>
                  )}
                  {socialMedia?.facebook && (
                    <a
                      href={socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:underline" />
                    </a>
                  )}
                  {socialMedia?.github && (
                    <a
                      href={socialMedia.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-5 h-5  text-gray-600 dark:text-gray-300 hover:underline" />
                    </a>
                  )}
                  {socialMedia?.x && (
                    <a
                      href={socialMedia.x}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaX className="w-5 h-5  text-gray-600 dark:text-gray-300 hover:underline" />
                    </a>
                  )}
                  {socialMedia?.youtube && (
                    <a
                      href={socialMedia.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="w-5 h-5  text-gray-600 dark:text-gray-300 hover:underline" />
                    </a>
                  )}
                  {socialMedia?.instagram && (
                    <a
                      href={socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram className="w-5 h-5  text-gray-600 dark:text-gray-300 hover:underline" />
                    </a>
                  )}
                </div>
              </div>
              <div
                className="flex justify-center"
                suppressHydrationWarning={true}
              >
                <div
                  className="relative"
                  suppressHydrationWarning={true}
                >
                  {/* <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full opacity-20 absolute -inset-4 animate-pulse"> */}
                  {resume.introVideo ? (
                    <iframe
                      className="w-100 h-72 shadow-2xl relative z-10 border-4 border-white dark:border-gray-800"
                      src={resume.introVideo}
                      allowFullScreen
                    />
                  ) : resume.personalImageUrl ? (
                    <Image
                      src={
                        resume.personalImageUrl ??
                        '/default-profile.png'
                      }
                      width={288}
                      height={288}
                      alt={resume.personalName ?? 'Profile image'}
                      className="w-72 h-72 rounded-full object-cover shadow-2xl relative z-10 border-4 border-white dark:border-gray-800"
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Projects Section --> */}
        {projects && projects.length > 0 && (
          <section
            id="projects"
            suppressHydrationWarning
            className={
              sections.indexOf('projects') % 2 !== 0
                ? 'bg-gray-50 dark:bg-gray-800 py-20'
                : 'bg-white dark:bg-gray-900 py-20'
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Featured Projects
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Some of my recent work that I&#39;m proud to share
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects &&
                  projects.map(project => (
                    <div
                      key={project.projectId}
                      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                    >
                      <div className="h-48 flex justify-center bg-gradient-to-br from-blue-800 to-blue-200">
                        {project.projectImageUrl ? (
                          <Image
                            src={project.projectImageUrl}
                            alt={
                              project.projectName || 'Project image'
                            }
                            height={192}
                            width={192}
                            className="rounded-2xl my-1"
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
                          className="px-6 mb-1"
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
                            className="text-gray-600 dark:text-gray-300 mb-4"
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
                            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 font-semibold"
                          >
                            Website
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 font-semibold"
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

        {/* About Section */}
        <section
          id="about"
          className={
            sections.indexOf('about') % 2 !== 0
              ? 'bg-gray-50 dark:bg-gray-800 py-20'
              : 'bg-white dark:bg-gray-900 py-20'
          }
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                About Me
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                <p>
                  <span
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                      __html: resume.introduction || ''
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Skills Section --> */}
        {skills && skills.length > 0 && (
          <section
            id="skills"
            suppressHydrationWarning
            className={
              sections.indexOf('skills') % 2 !== 0
                ? 'bg-gray-50 dark:bg-gray-800 py-20'
                : 'bg-white dark:bg-gray-900 py-20'
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  My Skills
                </h2>
              </div>
              <div className="flex justify-center flex-wrap flex-row gap-8">
                {skills &&
                  skills.map((s, index) => (
                    <div key={index}>
                      <div className="">
                        <Badge
                          variant="default"
                          className="bg-primary-700 text-primary-100 dark:bg-primary-900 dark:text-primary-300 px-8 py-2 text-2xl font-semibold"
                        >
                          {s.skill}
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
                ? 'bg-gray-50 dark:bg-gray-800 py-20'
                : 'bg-white dark:bg-gray-900 py-20'
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  My Certifications
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications &&
                  certifications.length > 0 &&
                  certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 mb-6"
                    >
                      <div className="p-2 sm:p-4 lg:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
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
                ? 'bg-gray-50 dark:bg-gray-800 py-20'
                : 'bg-white dark:bg-gray-900 py-20'
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  My Awards and Honors
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards &&
                  awards.length > 0 &&
                  awards.map((award, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 mb-6"
                    >
                      <div className="p-2 sm:p-4 lg:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
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
                ? 'bg-gray-50 dark:bg-gray-800 py-20'
                : 'bg-white dark:bg-gray-900 py-20'
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  My Reviews and References
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews &&
                  reviews.length > 0 &&
                  reviews.map((review, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 mb-6"
                    >
                      <div className="p-2 sm:p-4 lg:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="text-xl md:text-2xl font-bold mb-1 flex flex-row items-center gap-4">
                          {review.reviewName}

                          {review.reviewDate && (
                            <div className="text-sm md:text-lg font-semibold">
                              {review.reviewDate}
                            </div>
                          )}
                        </div>
                        {review.company && (
                          <div className="text-sm md:text-lg font-semibold mb-1">
                            {review.company}
                          </div>
                        )}
                        {review.comment && (
                          <div className="text-lg md:text-xl font-semibold mb-3">
                            <span
                              suppressHydrationWarning
                              dangerouslySetInnerHTML={{
                                __html: review.comment || ''
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

        {/* <!-- Experience Section --> */}
        {experience && experience.length > 0 && (
          <section
            id="experience"
            suppressHydrationWarning
            className={
              sections.indexOf('experience') % 2 !== 0
                ? 'bg-gray-50 dark:bg-gray-800 py-20'
                : 'bg-white dark:bg-gray-900 py-20'
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  My Work Experience
                </h2>
              </div>

              <div className="flex-col flex-col-1  gap-8">
                {experience &&
                  experience.length > 0 &&
                  experience.map((job, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 lg:px-8 mb-6"
                    >
                      <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
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
                            <span className="text-gray-600 dark:text-gray-300">
                              {job.startDate}
                            </span>
                            <span className="text-gray-600 dark:text-gray-300">
                              -
                            </span>

                            {job.endDate ? (
                              <span className="text-gray-600 dark:text-gray-300">
                                {job.endDate}
                              </span>
                            ) : (
                              <span className="text-gray-600 dark:text-gray-300">
                                Current
                              </span>
                            )}
                          </div>
                        )}

                        {job.responsibilities && (
                          <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
                            <span className="font-bold text-lg">
                              Responsibilities:
                            </span>
                            <span
                              suppressHydrationWarning
                              dangerouslySetInnerHTML={{
                                __html: job.responsibilities || ''
                              }}
                            />
                          </p>
                        )}
                        {job.achievements && (
                          <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
                            <span className="font-bold text-lg">
                              Achievements:
                            </span>
                            <span
                              suppressHydrationWarning
                              dangerouslySetInnerHTML={{
                                __html: job.achievements || ''
                              }}
                            />
                          </p>
                        )}

                        <div className="flex flex-row gap-3">
                          {job.website && (
                            <a
                              href={job.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 font-semibold"
                            >
                              Website
                            </a>
                          )}
                          {job.github && (
                            <a
                              href={job.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 font-semibold"
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
                ? 'bg-gray-50 dark:bg-gray-800 py-20'
                : 'bg-white dark:bg-gray-900 py-20'
            }
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  My Education
                </h2>
              </div>

              <div className="flex-col flex-col-1  gap-8">
                {education &&
                  education.length > 0 &&
                  education.map((school, index) => (
                    <div
                      key={index}
                      className="max-w-7xl px-4 sm:px-6 lg:px-8 mb-6"
                    >
                      <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="text-xl md:text-2xl font-bold mb-1">
                          {school.institutionName}
                        </div>

                        {school.startDate && (
                          <div className="flex flex-row gap-3">
                            <span className="text-gray-600 dark:text-gray-300">
                              {school.startDate}
                            </span>
                            <span className="text-gray-600 dark:text-gray-300">
                              -
                            </span>

                            {school.endDate ? (
                              <span className="text-gray-600 dark:text-gray-300">
                                {school.endDate}
                              </span>
                            ) : (
                              <span className="text-gray-600 dark:text-gray-300">
                                Current
                              </span>
                            )}
                          </div>
                        )}

                        {school.description && (
                          <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4">
                            <span
                              suppressHydrationWarning
                              dangerouslySetInnerHTML={{
                                __html: school.description || ''
                              }}
                            />
                          </p>
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
    </>
  );
};

export default SimpleBlue;
