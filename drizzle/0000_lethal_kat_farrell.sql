CREATE TABLE "account" (
	"userId" uuid NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE "authenticator" (
	"credentialID" text NOT NULL,
	"userId" uuid NOT NULL,
	"providerAccountId" text NOT NULL,
	"credentialPublicKey" text NOT NULL,
	"counter" integer NOT NULL,
	"credentialDeviceType" text NOT NULL,
	"credentialBackedUp" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "authenticator_credentialID_unique" UNIQUE("credentialID")
);
--> statement-breakpoint
CREATE TABLE "environment" (
	"createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"environmentCd" text PRIMARY KEY NOT NULL,
	"environmentDesc" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "host" (
	"createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"hostCd" text PRIMARY KEY NOT NULL,
	"hostUrl" text NOT NULL,
	"environmentCd" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "plan" (
	"planId" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"maxResumeCnt" integer NOT NULL,
	"isActive" boolean DEFAULT true NOT NULL,
	"price" numeric(12, 2) DEFAULT '0' NOT NULL,
	"createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"maxActiveResumeCnt" integer DEFAULT 0 NOT NULL,
	"maxProfileProjectCnt" integer DEFAULT 0 NOT NULL,
	"payFreq" text DEFAULT 'MONTHLY' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project" (
	"projectId" serial PRIMARY KEY NOT NULL,
	"resumeId" integer NOT NULL,
	"projectName" text NOT NULL,
	"role" text,
	"startDate" timestamp(6),
	"endDate" timestamp(6),
	"projectImage_idx" integer,
	"description" text,
	"website" text,
	"github" text,
	"createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" uuid NOT NULL,
	"expires" timestamp(6) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subscriberresume" (
	"resumeId" serial PRIMARY KEY NOT NULL,
	"userId_idx" uuid NOT NULL,
	"title" text,
	"phone" text,
	"subdomain" text,
	"hostCd" text,
	"url" text,
	"templateId_idx" integer,
	"tagLine" text,
	"introduction" text,
	"createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL,
	"socialMedia" jsonb,
	"resumeDesc" text,
	"resumeName" text NOT NULL,
	"resumeStatus" text DEFAULT 'DRAFT' NOT NULL,
	"education" jsonb,
	"reviews" jsonb,
	"skills" jsonb,
	"experience" jsonb,
	"email" text,
	"introVideo" text,
	"personalName" text,
	"certifications" jsonb,
	"resumePersonalImage_idx" integer,
	"resumeUpload_idx" integer
);
--> statement-breakpoint
CREATE TABLE "template" (
	"templateId" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL,
	"description" text NOT NULL,
	"isFeatured" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"features" text[],
	"updatedAt" timestamp(3) NOT NULL,
	"environmentCd" text DEFAULT 'DEV' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "uploadfile" (
	"uploadFileId" serial PRIMARY KEY NOT NULL,
	"userId_idx" uuid NOT NULL,
	"uploadFileName" text NOT NULL,
	"uploadFileUrl" text NOT NULL,
	"createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text DEFAULT 'NO_NAME' NOT NULL,
	"email" text NOT NULL,
	"password" text,
	"role" text DEFAULT 'SUBSCRIBER' NOT NULL,
	"emailVerified" timestamp(6),
	"createdAt" timestamp(6) DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"image" text,
	"updatedAt" timestamp(3) NOT NULL,
	"status" text DEFAULT 'NEW' NOT NULL,
	"planId" integer
);
--> statement-breakpoint
CREATE TABLE "verificationtoken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp(3) NOT NULL,
	CONSTRAINT "verificationtoken_pkey" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "host" ADD CONSTRAINT "host_environmentCd_environment_environmentCd_fk" FOREIGN KEY ("environmentCd") REFERENCES "public"."environment"("environmentCd") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project" ADD CONSTRAINT "project_resumeId_resume_resumeId_fk" FOREIGN KEY ("resumeId") REFERENCES "public"."subscriberresume"("resumeId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriberresume" ADD CONSTRAINT "subscriberresume_userId_idx_user_id_fk" FOREIGN KEY ("userId_idx") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriberresume" ADD CONSTRAINT "subscriberresume_templateId_idx_template_templateId_fk" FOREIGN KEY ("templateId_idx") REFERENCES "public"."template"("templateId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriberresume" ADD CONSTRAINT "subscriberresume_templateId_template_templateId_fk" FOREIGN KEY ("templateId_idx") REFERENCES "public"."template"("templateId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriberresume" ADD CONSTRAINT "subscriberresume_hostCd_host_hostCd_fk" FOREIGN KEY ("hostCd") REFERENCES "public"."host"("hostCd") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriberresume" ADD CONSTRAINT "subscriberresume_userId_user_id_fk" FOREIGN KEY ("userId_idx") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "template" ADD CONSTRAINT "template_environmentCd_environment_environmentCd_fk" FOREIGN KEY ("environmentCd") REFERENCES "public"."environment"("environmentCd") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "uploadfile" ADD CONSTRAINT "uploadfile_userId_user_id_fk" FOREIGN KEY ("userId_idx") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_planId_plan_id_fk" FOREIGN KEY ("planId") REFERENCES "public"."plan"("planId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "plan_name_idx" ON "plan" USING btree ("name" text_ops);--> statement-breakpoint
CREATE UNIQUE INDEX "subscriberresume_idx" ON "subscriberresume" USING btree ("resumeId");--> statement-breakpoint
CREATE UNIQUE INDEX "uploadfile_uploadFileId_key" ON "uploadfile" USING btree ("uploadFileId");--> statement-breakpoint
CREATE UNIQUE INDEX "user_email_idx" ON "user" USING btree ("email" text_ops);