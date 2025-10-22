import { users } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { createRESTAPI } from '@/lib/rest-generator';

const api = createRESTAPI(users, db, 'users');
export const { GET, POST, PUT, DELETE } = api;