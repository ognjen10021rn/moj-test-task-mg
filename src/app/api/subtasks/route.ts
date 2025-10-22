import { subtasks } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { createRESTAPI } from '@/lib/rest-generator';

const api = createRESTAPI(subtasks, db, 'subtasks');
export const { GET, POST, PUT, DELETE } = api;