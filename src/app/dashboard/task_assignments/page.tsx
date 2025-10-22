"use client";

import { CrudPage } from '@/components/crud-page';
import { taskAssignmentCrudConfig } from '@/entities/task_assignments/config';

export default function TaskAssignmentsPage() {
  return <CrudPage config={ taskAssignmentCrudConfig } />;
}