import type { PlanSummary, RenamePlan } from './logic';
import { summarizePlan } from './logic';

export type PlanTone = 'empty' | 'ready' | 'warning' | 'blocked';

export interface PlanEvaluation {
  summary: PlanSummary;
  tone: PlanTone;
}

export function evaluatePlan(plan: RenamePlan[]): PlanEvaluation {
  const summary = summarizePlan(plan);
  if (summary.total === 0) return { summary, tone: 'empty' };
  if (summary.issues > 0) return { summary, tone: 'blocked' };
  if (summary.ready === 0) return { summary, tone: 'warning' };
  return { summary, tone: 'ready' };
}
