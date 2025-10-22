import { taskAssignments } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { createRESTAPI } from '@/lib/rest-generator';

const api = createRESTAPI(taskAssignments, db, 'taskAssignments');
export const { GET, POST, PUT, DELETE } = api;