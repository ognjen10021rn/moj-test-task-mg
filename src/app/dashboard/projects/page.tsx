"use client";

import { CrudPage } from '@/components/crud-page';
import { projectCrudConfig } from '@/entities/projects/config';

export default function ProjectsPage() {
  return <CrudPage config={ projectCrudConfig } />;
}