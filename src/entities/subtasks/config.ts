import { z } from 'zod';
import { createCrudPageConfig } from '@/lib/crud-config';
import { commonColumns } from '@/lib/column-configs';
import { commonFields } from '@/lib/field-configs';
import { SubtaskWithStats } from './types';
import { subtaskSchema } from '@/lib/validations';

// Subtask-specific column configuration
const subtaskTableConfig = {
  columns: [
    commonColumns.number('id', 'Id'),
    commonColumns.number('taskId', 'Task Id'),
    commonColumns.text('name', 'Name'),
    commonColumns.text('description', 'Description'),
    commonColumns.text('priorityLevel', 'Priority Level'),
    commonColumns.date('dueDate', 'Due Date'),
    commonColumns.text('status', 'Status'),
    // Add relationship count columns here if needed
    // commonColumns.number('relatedEntityCount', 'Related Entity Count'),
  ],
  searchKey: 'id' as keyof SubtaskWithStats,
  searchPlaceholder: 'Search subtasks...',
  entityName: 'subtask',
};

// Subtask form configuration
const subtaskFormConfig = {
  fields: [
    commonFields.number('taskId', 'Task Id'),
    commonFields.text('name', 'Name'),
    commonFields.text('description', 'Description'),
    commonFields.text('priorityLevel', 'Priority Level'),
    commonFields.date('dueDate', 'Due Date'),
    commonFields.text('status', 'Status'),
  ],
  schema: subtaskSchema,
  entityName: 'Subtask',
};

// Complete subtask CRUD configuration
export const subtaskCrudConfig = createCrudPageConfig<SubtaskWithStats>({
  entityName: 'Subtask',
  entityNamePlural: 'Subtasks',
  description: 'Manage subtasks and their information',
  
  crudConfig: {
    entityName: 'subtask',
    entityNamePlural: 'subtasks',
    apiEndpoint: '/api/subtasks',
  },
  
  tableConfig: subtaskTableConfig,
  formConfig: subtaskFormConfig,
  
  defaultFilters: {
    limit: 10,
    page: 1,
  },
});