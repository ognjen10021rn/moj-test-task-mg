import { z } from 'zod';
import { createCrudPageConfig } from '@/lib/crud-config';
import { commonColumns } from '@/lib/column-configs';
import { commonFields } from '@/lib/field-configs';
import { TaskAssignmentWithStats } from './types';
import { taskAssignmentSchema } from '@/lib/validations';

// TaskAssignment-specific column configuration
const taskAssignmentTableConfig = {
  columns: [
    commonColumns.number('id', 'Id'),
    commonColumns.number('taskId', 'Task Id'),
    commonColumns.number('userId', 'User Id'),
    // Add relationship count columns here if needed
    // commonColumns.number('relatedEntityCount', 'Related Entity Count'),
  ],
  searchKey: 'id' as keyof TaskAssignmentWithStats,
  searchPlaceholder: 'Search taskAssignments...',
  entityName: 'taskAssignment',
};

// TaskAssignment form configuration
const taskAssignmentFormConfig = {
  fields: [
    commonFields.number('taskId', 'Task Id'),
    commonFields.number('userId', 'User Id'),
  ],
  schema: taskAssignmentSchema,
  entityName: 'TaskAssignment',
};

// Complete taskAssignment CRUD configuration
export const taskAssignmentCrudConfig = createCrudPageConfig<TaskAssignmentWithStats>({
  entityName: 'TaskAssignment',
  entityNamePlural: 'TaskAssignments',
  description: 'Manage taskassignments and their information',
  
  crudConfig: {
    entityName: 'taskAssignment',
    entityNamePlural: 'taskAssignments',
    apiEndpoint: '/api/task_assignments',
  },
  
  tableConfig: taskAssignmentTableConfig,
  formConfig: taskAssignmentFormConfig,
  
  defaultFilters: {
    limit: 10,
    page: 1,
  },
});