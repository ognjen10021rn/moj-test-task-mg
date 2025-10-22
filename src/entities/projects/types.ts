import { Project, NewProject } from '@/drizzle/schema';

export type { Project, NewProject };

// Extended type with additional stats or computed fields
export interface ProjectWithStats extends Project {
  // Add computed fields such as relationship counts here
  // Example: relatedEntityCount?: number;
}

// Response type for paginated projects list
export interface ProjectsResponse {
  projects: ProjectWithStats[];
  total: number;
  page: number;
  limit: number;
}

// Filter type for projects queries
export interface ProjectFilters {
  query?: string;
  name?: string;
  description?: string;
  dueDate?: Date | string;
  status?: string;
  page?: number;
  limit?: number;
}