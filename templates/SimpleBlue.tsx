import './simpleblue/simpleblue.css';
import {
  Resume,
  PortfolioProject,
  ResumeExperienceItem,
  ResumeEducationItem,
  ResumeCertificationItem,
  ResumeReviewItem,
  ResumeSkillItem,
  ResumeSocialMedia
} from '@/types/resume';
import Image from 'next/image';
//import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
//import Link from 'next/link';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaX
} from 'react-icons/fa6';

const SimpleBlue = ({
  resume,
  projects
}: {
  resume: Resume;
  projects: PortfolioProject[];
}) => {
  //let count = 1;

  const experience: ResumeExperienceItem[] = Array.isArray(
    resume.experience
  )
    ? resume.experience
    : [];
  const education: ResumeEducationItem[] = Array.isArray(
    resume.education
  )
    ? resume.education
    : [];

  const certifications: ResumeCertificationItem[] = Array.isArray(
    resume.certifications
  )
    ? resume.certifications
    : [];

  const reviews: ResumeReviewItem[] = Array.isArray(resume.reviews)
    ? resume.reviews
    : [];

  const skills: ResumeSkillItem[] = Array.isArray(resume.skills)
    ? resume.skills
    : [];

  const socialMedia: ResumeSocialMedia = resume.socialMedia || '';

  //this will be used to decide the alternating background color
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
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* <!-- Sticky Navigation --> */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
              {resume.personalName}
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#hero"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Home
              </a>
              {projects && projects.length > 0 && (
                <a
                  href="#projects"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Projects
                </a>
              )}
              {resume.introduction && (
                <a
                  href="#about"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About
                </a>
              )}

              <a
                href="#contact"
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Contact
              </a>
            </div>
            <button
              id="theme-toggle"
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2L13.09 8.26L20 9L14 14.74L15.18 21.02L10 17.77L4.82 21.02L6 14.74L0 9L6.91 8.26L10 2Z"></path>
              </svg>
            </button>
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-800">
                Hi, I&#39;m {resume.personalName}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                {resume.tagLine}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </a>
              </div>
              <div className="flex flex-row gap-6 justify-center lg:justify-start mt-6">
                {socialMedia?.linkedin && (
                  <a
                    href={socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-5 h-5  text-gray-600 dark:text-gray-300 hover:underline" />
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
            <div className="flex justify-center">
              <div className="relative">
                {/* <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full opacity-20 absolute -inset-4 animate-pulse"> */}
                <Image
                  src={
                    resume.personalImageUrl ?? '/default-profile.png'
                  }
                  width={288}
                  height={288}
                  alt={resume.personalName ?? 'Profile image'}
                  className="w-72 h-72 rounded-full object-cover shadow-2xl relative z-10 border-4 border-white dark:border-gray-800"
                />
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
                          alt={project.projectName || 'Project image'}
                          height={192}
                          width={192}
                          className="rounded-2xl my-1"
                        />
                      ) : null}
                    </div>
                    <div className="p-6" suppressHydrationWarning>
                      <h3 className="text-xl font-bold mb-1">
                        {project.projectName}
                      </h3>
                      {project.role && (
                        <h6 className="text-sm font-semibold mb-3">
                          {project.role}
                        </h6>
                      )}
                      {project.description && (
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          <span
                            suppressHydrationWarning
                            dangerouslySetInnerHTML={{
                              __html: project.description || ''
                            }}
                          />
                        </p>
                      )}
                      <div
                        className="flex flex-row gap-3"
                        suppressHydrationWarning
                      >
                        suppressHydrationWarning
                        {project.website && (
                          <a
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        </section>
      )}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Ready to start your next project? Let&#39;s work
              together!
            </p>
          </div>
          <form
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
            // onSubmit="handleFormSubmit(event)"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 transition-colors"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Alex Johnson. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>

    /* // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }); */

    /* // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    }); */
  );
};

export default SimpleBlue;
