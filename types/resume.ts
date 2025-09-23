export type Resume = {
  resumeId: number;
  resumeStatus: string;
  url?: string;
  templateName?: string | null;
  tagLine?: string | null;
  personalName: string | null;
  email: string | null;
  introduction?: string | null;
  phone?: string | null;
  title?: string | null;
  personalImageUrl?: string | null;
  resumeUploadUrl?: string | null;
  introVideo?: string | null;
  socialMedia?: ResumeSocialMedia | unknown;
  skills?: ResumeSkillItem[] | unknown;
  awards?: ResumeAwardItem[] | unknown;
  certifications?: ResumeCertificationItem[] | unknown;
  experience?: ResumeExperienceItem[] | unknown;
  education?: ResumeEducationItem[] | unknown;
  reviews?: ResumeReviewItem[] | unknown;
  subscriberEmail: string;
};

export type ResumeSkillItem = {
  skill: string;
};

export type ResumeExperienceItem = {
  title: string;
  startDate?: string | undefined;
  endDate?: string | undefined;
  website?: string | undefined;
  github?: string | undefined;
  companyName?: string | undefined;
  responsibilities?: string | undefined;
  achievements?: string | undefined;
};

export type ResumeEducationItem = {
  institutionName: string;
  degree: string;
  description?: string | undefined;
  startDate?: string | undefined;
  endDate?: string | undefined;
};

export type PortfolioProject = {
  role: string | null;
  description: string | null;
  projectName: string | null;
  projectId?: number | undefined;
  startDate?: string | null;
  endDate?: string | null;
  website?: string | null;
  github?: string | null;
  //projectImageFileName?: string | undefined;
  projectImageUrl?: string | null;
  technologies?: string | null;
  //projectImageUploadFileId?: number | null | undefined;
};

export type ResumeReviewItem = {
  reviewName: string;
  comment: string;
  company?: string | undefined;
  reviewDate?: string | undefined;
};

export type ResumeCertificationItem = {
  certificationName: string;
  certificationDate?: string | undefined;
};

export type ResumeSocialMedia = {
  github?: string | undefined;
  facebook?: string | undefined;
  x?: string | undefined;
  linkedin?: string | undefined;
  instagram?: string | undefined;
  youtube?: string | undefined;
};

export type ResumeAwardItem = {
  description: string;
  awardName: string;
  company?: string | undefined;
  awardDate?: string | undefined;
};
