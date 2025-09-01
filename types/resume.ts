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
  introVideo?: string | null;
  socialMedia?: ResumeSocialMedia | unknown;
  skills?: ResumeSkillItem[] | unknown;
  certifications?: ResumeCertificationItem[] | unknown;
  experience?: ResumeExperienceItem[] | unknown;
  education?: ResumeEducationItem[] | unknown;
  reviews?: ResumeReviewItem[] | unknown;
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
