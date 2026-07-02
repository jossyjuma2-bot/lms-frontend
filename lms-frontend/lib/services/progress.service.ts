import api from '@/lib/api';
import type { ProgressSummary } from '@/types';

export const progressService = {
  myProgress: () => api.get<ProgressSummary[]>('/progress/me').then((r) => r.data),

  courseProgress: (courseId: string) =>
    api.get<ProgressSummary>(`/progress/courses/${courseId}`).then((r) => r.data),

  learnerProgressForCourse: (courseId: string, learnerId: string) =>
    api
      .get<ProgressSummary>(`/progress/courses/${courseId}/learners/${learnerId}`)
      .then((r) => r.data),
};
