'use server';

// import { isRedirectError } from 'next/dist/client/components/redirect-error';

import db from '@/db/drizzle';
import { and, eq, sql } from 'drizzle-orm';
import {
  uploadfile,
  subscriberresume,
  template,
  project,
  user
} from '@/drizzle/schema';
import { alias } from 'drizzle-orm/pg-core';
import { formatError } from '@/lib/utils';

export async function getResumesByPersonalName(
  personalName?: string
) {
  if (!personalName)
    throw new Error(
      'getResumeByPersonalName Missing the Personal Name'
    );
  //only return resumes where the resumeStatus is 'ACTIVE'
  // and personalName matches (case insensitive)
  // and the subscriber status is 'ACTIVE'

  const resumeList = await db
    .select({
      title: subscriberresume.title,
      url: subscriberresume.url
    })
    .from(subscriberresume)
    .innerJoin(user, eq(subscriberresume.userId, user.id))
    .where(
      and(
        eq(
          lower(subscriberresume.personalName),
          personalName.toLowerCase()
        ),
        eq(subscriberresume.resumeStatus, 'ACTIVE'),
        eq(user.status, 'ACTIVE')
      )
    );

  return resumeList;
}

//only return resumes where the resumeStatus is 'ACTIVE'
// and the subscriber status is 'ACTIVE'

export async function getResumeByUrl(rUrl?: string) {
  if (!rUrl) throw new Error('getResumeByUrl Missing the Url');

  const sr = alias(subscriberresume, 'sr');
  const ufp = alias(uploadfile, 'ufp');
  const ufr = alias(uploadfile, 'ufr');
  const t = alias(template, 't');
  const u = alias(user, 'u');

  try {
    const resume = await db
      .select({
        resumeId: sr.resumeId,
        title: sr.title,
        phone: sr.phone,
        email: sr.email,
        personalName: sr.personalName,
        tagLine: sr.tagLine,
        introVideo: sr.introVideo,
        introduction: sr.introduction,
        experience: sr.experience,
        education: sr.education,
        skills: sr.skills,
        awards: sr.awards,
        reviews: sr.reviews,
        certifications: sr.certifications,
        socialMedia: sr.socialMedia,
        resumeStatus: sr.resumeStatus,
        templateName: t.name,
        personalImageUrl: ufp.uploadFileUrl,
        resumeUploadUrl: ufr.uploadFileUrl
      })
      .from(sr)
      .innerJoin(u, eq(sr.userId, u.id))
      .leftJoin(t, eq(sr.templateId, t.templateId))
      .leftJoin(ufp, eq(sr.resumePersonalImageId, ufp.uploadFileId))
      .leftJoin(ufr, eq(sr.resumeUploadId, ufr.uploadFileId))
      .where(
        and(
          eq(sr.url, rUrl),
          eq(sr.resumeStatus, 'ACTIVE'),
          eq(u.status, 'ACTIVE')
        )
      );

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
        technologies: p.technologies,
        projectImageUrl: uf.uploadFileUrl
      })
      .from(p)
      .leftJoin(uf, eq(p.projectImageId, uf.uploadFileId))
      .where(eq(p.resumeId, resumeId));

    //console.log('projects from getProjectsByResumeId: ', projects);
    return projects;
  } catch (error) {
    console.error('Error in getProjectsByResumeId:', error);
    throw new Error(formatError(error));
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function lower(columnRef: any) {
  return sql`lower(${columnRef})`;
}
