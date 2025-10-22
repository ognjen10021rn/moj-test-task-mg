"use client";

import { CrudPage } from '@/components/crud-page';
import { subtaskCrudConfig } from '@/entities/subtasks/config';

export default function SubtasksPage() {
  return <CrudPage config={ subtaskCrudConfig } />;
}