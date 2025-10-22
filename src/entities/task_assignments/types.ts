import { TaskAssignment, NewTaskAssignment } from '@/drizzle/schema';

export type { TaskAssignment, NewTaskAssignment };

// Extended type with additional stats or computed fields
export interface TaskAssignmentWithStats extends TaskAssignment {
  // Add computed fields such as relationship counts here
  // Example: relatedEntityCount?: number;
}

// Response type for paginated taskAssignments list
export interface TaskAssignmentsResponse {
  taskAssignments: TaskAssignmentWithStats[];
  total: number;
  page: number;
  limit: number;
}

// Filter type for taskAssignments queries
export interface TaskAssignmentFilters {
  query?: string;
  taskId?: number;
  userId?: number;
  page?: number;
  limit?: number;
}