import { z } from 'zod';
import { createCrudPageConfig } from '@/lib/crud-config';
import { commonColumns } from '@/lib/column-configs';
import { commonFields } from '@/lib/field-configs';
import { UserWithStats } from './types';
import { userSchema } from '@/lib/validations';

// User-specific column configuration
const userTableConfig = {
  columns: [
    commonColumns.number('id', 'Id'),
    commonColumns.text('username', 'Username'),
    commonColumns.text('email', 'Email'),
    commonColumns.text('role', 'Role'),
    // Add relationship count columns here if needed
    // commonColumns.number('relatedEntityCount', 'Related Entity Count'),
  ],
  searchKey: 'id' as keyof UserWithStats,
  searchPlaceholder: 'Search users...',
  entityName: 'user',
};

// User form configuration
const userFormConfig = {
  fields: [
    commonFields.text('username', 'Username'),
    commonFields.text('email', 'Email'),
    commonFields.text('role', 'Role'),
  ],
  schema: userSchema,
  entityName: 'User',
};

// Complete user CRUD configuration
export const userCrudConfig = createCrudPageConfig<UserWithStats>({
  entityName: 'User',
  entityNamePlural: 'Users',
  description: 'Manage users and their information',
  
  crudConfig: {
    entityName: 'user',
    entityNamePlural: 'users',
    apiEndpoint: '/api/users',
  },
  
  tableConfig: userTableConfig,
  formConfig: userFormConfig,
  
  defaultFilters: {
    limit: 10,
    page: 1,
  },
});