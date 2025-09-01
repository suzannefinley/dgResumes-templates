'use server';

// import { isRedirectError } from 'next/dist/client/components/redirect-error';

import db from '@/db/drizzle';
import { eq } from 'drizzle-orm';
import {
  uploadfile,
  subscriberresume,
  template,
  project
} from '@/drizzle/schema';
import { alias } from 'drizzle-orm/pg-core';
import { formatError } from '@/lib/utils';

export async function getResumeByUrl(rUrl?: string) {
  if (!rUrl) throw new Error('getResumeByUrl Missing the Url');

  const sr = alias(subscriberresume, 'sr');
  const uf = alias(uploadfile, 'uf');
  const t = alias(template, 't');

  try {
    const resume = await db
      .select({
        resumeId: sr.resumeId,
        title: sr.title,
        phone: sr.phone,
        email: sr.email,
        personalName: sr.personalName,
        tagLine: sr.tagLine,
        introduction: sr.introduction,
        experience: sr.experience,
        education: sr.education,
        skills: sr.skills,
        reviews: sr.reviews,
        certifications: sr.certifications,
        socialMedia: sr.socialMedia,
        resumeStatus: sr.resumeStatus,
        templateName: t.name,
        personalImageUrl: uf.uploadFileUrl
      })
      .from(sr)
      .leftJoin(t, eq(sr.templateId, t.templateId))
      .leftJoin(uf, eq(sr.resumePersonalImageId, uf.uploadFileId))
      .where(eq(sr.url, rUrl));

    if (!resume) throw new Error('getResumeByUrl Resume not found');
    //console.log('resume: ' + resume[0]);
    return resume[0];
  } catch (error) {
    console.error('Error in getResumeByUrl:', error);
    throw new Error(formatError(error));
  }
}

export async function getProjectsByResumeId(resumeId: number) {
  if (!resumeId)
    throw new Error('getProjectsByResumeId Missing the Resume ID');

  const p = alias(project, 'p');
  const uf = alias(uploadfile, 'uf');

  try {
    const projects = await db
      .select({
        role: p.role,
        description: p.description,
        projectName: p.projectName,
        projectId: p.projectId,
        startDate: p.startDate,
        endDate: p.endDate,
        website: p.website,
        github: p.github,
        projectImageUrl: uf.uploadFileUrl
      })
      .from(p)
      .leftJoin(uf, eq(p.projectImageId, uf.uploadFileId))
      .where(eq(p.resumeId, resumeId));

    return projects;
  } catch (error) {
    console.error('Error in getProjectsByResumeId:', error);
    throw new Error(formatError(error));
  }
}
