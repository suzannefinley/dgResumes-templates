// don't make changes here
// make them in the main project and migrate them here

import {
  pgTable,
  pgView,
  //varchar,
  timestamp,
  date,
  text,
  integer,
  foreignKey,
  uuid,
  serial,
  uniqueIndex,
  boolean,
  jsonb,
  numeric,
  primaryKey
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
//import type { AdapterAccount } from '@auth/core/adapters';

export const host = pgTable(
  'host',
  {
    createdAt: timestamp({ precision: 6, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
    hostCd: text().primaryKey().notNull(),
    hostUrl: text().notNull(),
    environmentCd: text().notNull()
  },
  table => [
    foreignKey({
      columns: [table.environmentCd],
      foreignColumns: [environment.environmentCd],
      name: 'host_environmentCd_environment_environmentCd_fk'
    })
  ]
);

export const session = pgTable(
  'session',
  {
    id: text('id').primaryKey(),
    expiresAt: timestamp('expires_at').notNull(),
    token: text('token').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text('ip_address'),
    userAgent: text('user_agent'),
    userId: text('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' })
  },
  table => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'session_userId_user_id_fk'
    })
  ]
);

export const user = pgTable(
  'user',
  {
    id: uuid('id').primaryKey().defaultRandom().notNull(),
    name: text().default('NO_NAME').notNull(),
    email: text().notNull(),
    emailVerified: boolean(),
    role: text().default('SUBSCRIBER').notNull(),
    createdAt: timestamp({ precision: 6, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    image: text('image'),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
    stripeCustomerId: text(),
    resumeId: integer()
  },
  table => [
    uniqueIndex('user_email_idx').using(
      'btree',
      table.email.asc().nullsLast().op('text_ops')
    )
  ]
);

// The status and plan are coming from the subscription table
// that Stripe updates
export const vwUser = pgView('vw_user', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  name: text(),
  email: text().notNull(),
  emailVerified: boolean(),
  role: text(),
  createdAt: timestamp({ precision: 6, mode: 'string' }),
  image: text('image'),
  updatedAt: timestamp({ precision: 3, mode: 'string' }),
  status: text(),
  planId: integer(),
  stripeCustomerId: text(),
  resumeId: integer(),
  stripeSubscriptionName: text(),
  planName: text()
}).existing();

export const template = pgTable(
  'template',
  {
    templateId: serial().primaryKey().notNull(),
    name: text().notNull(),
    image: text().notNull(),
    demourl: text(),
    description: text().notNull(),
    isFeatured: boolean().default(false).notNull(),
    createdAt: timestamp({ precision: 6, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    features: text().array(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
    environmentCd: text().default('DEV').notNull()
  },
  table => [
    foreignKey({
      columns: [table.environmentCd],
      foreignColumns: [environment.environmentCd],
      name: 'template_environmentCd_environment_environmentCd_fk'
    })
  ]
);

export const environment = pgTable('environment', {
  createdAt: timestamp({ precision: 6, mode: 'string' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
  environmentCd: text().primaryKey().notNull(),
  environmentDesc: text().notNull()
});

export const uploadfile = pgTable(
  'uploadfile',
  {
    uploadFileId: serial().primaryKey().notNull(),
    userId: uuid('userId_idx').notNull(),
    uploadFileName: text().notNull(),
    uploadFileUrl: text().notNull(),
    createdAt: timestamp({ precision: 6, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull()
  },
  table => [
    uniqueIndex('uploadfile_uploadFileId_key').using(
      'btree',
      table.uploadFileId.asc()
    ),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'uploadfile_userId_user_id_fk'
    })
  ]
);

export const subscriberresume = pgTable(
  'subscriberresume',
  {
    resumeId: serial().primaryKey().notNull(),
    userId: uuid('userId_idx')
      .notNull()
      .references(() => user.id),
    title: text(),
    phone: text(),
    subdomain: text(),
    hostCd: text(),
    url: text(),
    templateId: integer('templateId_idx').references(
      () => template.templateId
    ),
    tagLine: text(),
    introduction: text(),
    createdAt: timestamp({ precision: 6, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
    socialMedia: jsonb(),
    resumeDesc: text(),
    resumeName: text().notNull(),
    resumeStatus: text().default('DRAFT').notNull(),
    education: jsonb(),
    reviews: jsonb(),
    skills: jsonb(),
    awards: jsonb(),
    experience: jsonb(),
    email: text(),
    introVideo: text(),
    personalName: text(),
    certifications: jsonb(),
    resumePersonalImageId: integer('resumePersonalImage_idx'),
    resumeUploadId: integer('resumeUpload_idx')
  },
  table => [
    uniqueIndex('subscriberresume_idx').using(
      'btree',
      table.resumeId.asc()
    ),
    uniqueIndex('subscriberresume_url_idx').using(
      'btree',
      table.url.asc()
    ),
    foreignKey({
      columns: [table.templateId],
      foreignColumns: [template.templateId],
      name: 'subscriberresume_templateId_template_templateId_fk'
    }),
    foreignKey({
      columns: [table.hostCd],
      foreignColumns: [host.hostCd],
      name: 'subscriberresume_hostCd_host_hostCd_fk'
    }),
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'subscriberresume_userId_user_id_fk'
    })
  ]
);

export const plan = pgTable(
  'plan',
  {
    planId: serial().primaryKey().notNull(),
    name: text().notNull(),
    payFreqCd: text().default('M').notNull(),
    stripePriceId: text(),
    stripePaymentLink: text(),
    stripeSubscriptionName: text(),
    description: text().notNull(),
    maxResumeCnt: integer().notNull(),
    isActive: boolean().default(true).notNull(),
    priceMonth: numeric({ precision: 12, scale: 2 })
      .default('0')
      .notNull(),
    priceYear: numeric({ precision: 12, scale: 2 })
      .default('0')
      .notNull(),
    createdAt: timestamp({ precision: 6, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
    maxActiveResumeCnt: integer().default(0).notNull(),
    maxProfileProjectCnt: integer().default(0).notNull(),
    payFreq: text().default('MONTHLY').notNull(),
    discount: numeric({ precision: 6, scale: 2 })
      .default('0')
      .notNull(),
    trialPeriodDays: integer().default(0).notNull(),
    features: text().array(),
    popular: boolean().default(false).notNull(),
    limits: text().array()
  },
  table => [
    uniqueIndex('plan_name_freqCd_idx').using(
      'btree',
      table.name.asc().nullsLast().op('text_ops'),
      table.payFreqCd.asc().nullsLast().op('text_ops')
    )
  ]
);

export const project = pgTable(
  'project',
  {
    projectId: serial().primaryKey().notNull(),
    resumeId: integer().notNull(),
    projectName: text().notNull(),
    role: text(),
    startDate: timestamp({ precision: 6, mode: 'string' }),
    endDate: timestamp({ precision: 6, mode: 'string' }),
    projectImageId: integer('projectImage_idx'),
    description: text(),
    technologies: text(),
    website: text(),
    github: text(),
    createdAt: timestamp({ precision: 6, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull()
  },
  table => [
    foreignKey({
      columns: [table.resumeId],
      foreignColumns: [subscriberresume.resumeId],
      name: 'project_resumeId_resume_resumeId_fk'
    })
  ]
);

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull()
});

export const account = pgTable(
  'account',
  {
    id: text().primaryKey().notNull(),
    userId: uuid().notNull(),
    providerId: text().notNull(),
    accountId: text().notNull(),
    refreshToken: text('refresh_token'),
    accessToken: text('access_token'),
    accessTokenExpiresAt: timestamp('access_token_expires_at'),
    refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
    scope: text(),
    idToken: text('id_token'),
    password: text('password'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull()
  },
  table => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'account_userId_user_id_fk'
    })
  ]
);

export const authenticators = pgTable(
  'authenticator',
  {
    credentialID: text('credentialID').notNull().unique(),
    userId: uuid('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    providerAccountId: text('providerAccountId').notNull(),
    credentialPublicKey: text('credentialPublicKey').notNull(),
    counter: integer('counter').notNull(),
    credentialDeviceType: text('credentialDeviceType').notNull(),
    credentialBackedUp: boolean('credentialBackedUp').notNull(),
    transports: text('transports')
  },
  authenticator => [
    {
      compositePK: primaryKey({
        columns: [authenticator.userId, authenticator.credentialID]
      })
    }
  ]
);

export const subscription = pgTable('subscription', {
  id: text('id').primaryKey().notNull(),
  plan: text('plan'),
  referenceId: uuid('referenceId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  stripeCustomerId: text('stripeCustomerId'),
  stripeSubscriptionId: text('stripeSubscriptionId'),
  status: text('status').notNull(),
  periodStart: date('periodStart'),
  periodEnd: date('periodEnd'),
  cancelAtPeriodEnd: boolean('cancelAtPeriodEnd'),
  seats: integer('seats'),
  trialStart: date('trialStart'),
  trialEnd: date('trialEnd'),
  cancelAt: timestamp('cancelAt'),
  canceledAt: timestamp('canceledAt'),
  cancellationFeedback: text('cancellationFeedback'),
  cancellationComment: text('cancellationComment'),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt')
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull()
});
