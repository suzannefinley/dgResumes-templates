import {
  Resume,
  ResumeAwardItem,
  ResumeCertificationItem,
  ResumeEducationItem,
  ResumeExperienceItem,
  ResumeReviewItem,
  ResumeSkillItem,
  ResumeSocialMedia
} from '@/types/resume';

const setDataArrays = (resume: Resume) => {
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

  const awards: ResumeAwardItem[] = Array.isArray(resume.awards)
    ? resume.awards
    : [];

  const socialMedia: ResumeSocialMedia = resume.socialMedia || '';

  return {
    experience,
    education,
    certifications,
    reviews,
    skills,
    awards,
    socialMedia
  };
};

export { setDataArrays };
