import { z } from 'zod';
import { createCrudPageConfig } from '@/lib/crud-config';
import { commonColumns } from '@/lib/column-configs';
import { commonFields } from '@/lib/field-configs';
import { TaskWithStats } from './types';
import { taskSchema } from '@/lib/validations';

// Task-specific column configuration
const taskTableConfig = {
  columns: [
    commonColumns.number('id', 'Id'),
    commonColumns.number('projectId', 'Project Id'),
    commonColumns.text('name', 'Name'),
    commonColumns.text('description', 'Description'),
    commonColumns.text('priorityLevel', 'Priority Level'),
    commonColumns.date('dueDate', 'Due Date'),
    commonColumns.text('status', 'Status'),
    // Add relationship count columns here if needed
    // commonColumns.number('relatedEntityCount', 'Related Entity Count'),
  ],
  searchKey: 'id' as keyof TaskWithStats,
  searchPlaceholder: 'Search tasks...',
  entityName: 'task',
};

// Task form configuration
const taskFormConfig = {
  fields: [
    commonFields.number('projectId', 'Project Id'),
    commonFields.text('name', 'Name'),
    commonFields.text('description', 'Description'),
    commonFields.text('priorityLevel', 'Priority Level'),
    commonFields.date('dueDate', 'Due Date'),
    commonFields.text('status', 'Status'),
  ],
  schema: taskSchema,
  entityName: 'Task',
};

// Complete task CRUD configuration
export const taskCrudConfig = createCrudPageConfig<TaskWithStats>({
  entityName: 'Task',
  entityNamePlural: 'Tasks',
  description: 'Manage tasks and their information',
  
  crudConfig: {
    entityName: 'task',
    entityNamePlural: 'tasks',
    apiEndpoint: '/api/tasks',
  },
  
  tableConfig: taskTableConfig,
  formConfig: taskFormConfig,
  
  defaultFilters: {
    limit: 10,
    page: 1,
  },
});