import { Task, NewTask } from '@/drizzle/schema';

export type { Task, NewTask };

// Extended type with additional stats or computed fields
export interface TaskWithStats extends Task {
  // Add computed fields such as relationship counts here
  // Example: relatedEntityCount?: number;
}

// Response type for paginated tasks list
export interface TasksResponse {
  tasks: TaskWithStats[];
  total: number;
  page: number;
  limit: number;
}

// Filter type for tasks queries
export interface TaskFilters {
  query?: string;
  projectId?: number;
  name?: string;
  description?: string;
  priorityLevel?: string;
  dueDate?: Date | string;
  status?: string;
  page?: number;
  limit?: number;
}