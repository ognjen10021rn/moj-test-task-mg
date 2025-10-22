import { z } from 'zod';
import { createCrudPageConfig } from '@/lib/crud-config';
import { commonColumns } from '@/lib/column-configs';
import { commonFields } from '@/lib/field-configs';
import { ProjectWithStats } from './types';
import { projectSchema } from '@/lib/validations';

// Project-specific column configuration
const projectTableConfig = {
  columns: [
    commonColumns.number('id', 'Id'),
    commonColumns.text('name', 'Name'),
    commonColumns.text('description', 'Description'),
    commonColumns.date('dueDate', 'Due Date'),
    commonColumns.text('status', 'Status'),
    // Add relationship count columns here if needed
    // commonColumns.number('relatedEntityCount', 'Related Entity Count'),
  ],
  searchKey: 'id' as keyof ProjectWithStats,
  searchPlaceholder: 'Search projects...',
  entityName: 'project',
};

// Project form configuration
const projectFormConfig = {
  fields: [
    commonFields.text('name', 'Name'),
    commonFields.text('description', 'Description'),
    commonFields.date('dueDate', 'Due Date'),
    commonFields.text('status', 'Status'),
  ],
  schema: projectSchema,
  entityName: 'Project',
};

// Complete project CRUD configuration
export const projectCrudConfig = createCrudPageConfig<ProjectWithStats>({
  entityName: 'Project',
  entityNamePlural: 'Projects',
  description: 'Manage projects and their information',
  
  crudConfig: {
    entityName: 'project',
    entityNamePlural: 'projects',
    apiEndpoint: '/api/projects',
  },
  
  tableConfig: projectTableConfig,
  formConfig: projectFormConfig,
  
  defaultFilters: {
    limit: 10,
    page: 1,
  },
});