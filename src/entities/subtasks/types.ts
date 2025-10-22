import { Subtask, NewSubtask } from '@/drizzle/schema';

export type { Subtask, NewSubtask };

// Extended type with additional stats or computed fields
export interface SubtaskWithStats extends Subtask {
  // Add computed fields such as relationship counts here
  // Example: relatedEntityCount?: number;
}

// Response type for paginated subtasks list
export interface SubtasksResponse {
  subtasks: SubtaskWithStats[];
  total: number;
  page: number;
  limit: number;
}

// Filter type for subtasks queries
export interface SubtaskFilters {
  query?: string;
  taskId?: number;
  name?: string;
  description?: string;
  priorityLevel?: string;
  dueDate?: Date | string;
  status?: string;
  page?: number;
  limit?: number;
}