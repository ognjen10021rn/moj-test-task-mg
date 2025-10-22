import { User, NewUser } from '@/drizzle/schema';

export type { User, NewUser };

// Extended type with additional stats or computed fields
export interface UserWithStats extends User {
  // Add computed fields such as relationship counts here
  // Example: relatedEntityCount?: number;
}

// Response type for paginated users list
export interface UsersResponse {
  users: UserWithStats[];
  total: number;
  page: number;
  limit: number;
}

// Filter type for users queries
export interface UserFilters {
  query?: string;
  username?: string;
  email?: string;
  role?: string;
  page?: number;
  limit?: number;
}