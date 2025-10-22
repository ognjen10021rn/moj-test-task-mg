import { projects } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { createRESTAPI } from '@/lib/rest-generator';

const api = createRESTAPI(projects, db, 'projects');
export const { GET, POST, PUT, DELETE } = api;