"use client";

import { CrudPage } from '@/components/crud-page';
import { taskCrudConfig } from '@/entities/tasks/config';

export default function TasksPage() {
  return <CrudPage config={ taskCrudConfig } />;
}