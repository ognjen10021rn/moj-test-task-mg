import { tasks } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { createRESTAPI } from '@/lib/rest-generator';

const api = createRESTAPI(tasks, db, 'tasks');
export const { GET, POST, PUT, DELETE } = api;