import { relations } from 'drizzle-orm/relations';
import {
  environment,
  host,
  user,
  session,
  template,
  uploadfile,
  subscriberresume,
  project,
  account
} from './schema';

export const hostRelations = relations(host, ({ one, many }) => ({
  environment: one(environment, {
    fields: [host.environmentCd],
    references: [environment.environmentCd]
  }),
  subscriberResumes: many(subscriberresume)
}));

export const environmentRelations = relations(
  environment,
  ({ many }) => ({
    hosts: many(host),
    templates: many(template)
  })
);

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id]
  })
}));

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  uploadFiles: many(uploadfile),
  subscriberResumes: many(subscriberresume),
  accounts: many(account)
}));

export const templateRelations = relations(
  template,
  ({ one, many }) => ({
    environment: one(environment, {
      fields: [template.environmentCd],
      references: [environment.environmentCd]
    }),
    subscriberResumes: many(subscriberresume)
  })
);

export const uploadFileRelations = relations(
  uploadfile,
  ({ one }) => ({
    user: one(user, {
      fields: [uploadfile.userId],
      references: [user.id]
    })
  })
);

export const subscriberResumeRelations = relations(
  subscriberresume,
  ({ one, many }) => ({
    template: one(template, {
      fields: [subscriberresume.templateId],
      references: [template.templateId]
    }),
    host: one(host, {
      fields: [subscriberresume.hostCd],
      references: [host.hostCd]
    }),
    user: one(user, {
      fields: [subscriberresume.userId],
      references: [user.id]
    }),
    projects: many(project)
  })
);

export const projectRelations = relations(project, ({ one }) => ({
  subscriberresume: one(subscriberresume, {
    fields: [project.resumeId],
    references: [subscriberresume.resumeId]
  })
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id]
  })
}));
