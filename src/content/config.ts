import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    caption: z.string(),
    shortName: z.string(),
    practiceArea: z.enum([
      'personal-injury',
      'landlord-tenant',
      'probate',
      'employment',
      'family-law',
      'criminal',
      'consumer-protection',
    ]),
    jurisdiction: z.string().default('California'),
    court: z.string().optional(),
    caseNumber: z.string().optional(),
    filed: z.string().optional(),
    parties: z.object({
      plaintiff: z.array(z.string()),
      defendant: z.array(z.string()),
    }),
    oneLiner: z.string(),
    timeline: z.array(z.object({
      date: z.string(),
      event: z.string(),
    })),
    artifactSlugs: z.array(z.string()),
    fictional: z.literal(true),
  }),
});

const artifacts = defineCollection({
  type: 'content',
  schema: z.object({
    caseSlug: z.string(),
    taskTypeSlug: z.string(),
    title: z.string(),
    formNumber: z.string().optional(),
    documentType: z.enum([
      'memo',
      'letter',
      'pleading',
      'discovery-request',
      'discovery-response',
      'motion',
      'form',
      'exhibit',
      'report',
    ]),
    authorRole: z.enum([
      'plaintiff',
      'defendant',
      'petitioner',
      'respondent',
      'neutral',
    ]),
    date: z.string(),
    pageCount: z.number().optional(),
    aiAugmentation: z.object({
      method: z.string(),
      humanJudgmentPoints: z.array(z.string()),
      timeSavedVsTraditional: z.string().optional(),
    }),
    fictional: z.literal(true),
  }),
});

const tasks = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    stage: z.enum([
      'intake',
      'case-management',
      'discovery-propounded',
      'discovery-responses',
      'motions',
      'trial-prep',
      'family-law',
      'probate',
      'criminal',
    ]),
    shortDef: z.string(),
    whenUsed: z.string(),
    caJurisdictionNotes: z.string().optional(),
  }),
});

export const collections = { cases, artifacts, tasks };
