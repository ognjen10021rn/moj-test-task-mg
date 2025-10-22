import { pgTable, serial, varchar, text, integer, timestamp, primaryKey, decimal } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const projects = pgTable('projects', {
  id: integer('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  dueDate: timestamp('due_date'),
  status: varchar('status', { length: 255 }),
});

export const tasks = pgTable('tasks', {
  id: integer('id').primaryKey(),
  projectId: integer('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  priorityLevel: varchar('priority_level', { length: 255 }),
  dueDate: timestamp('due_date'),
  status: varchar('status', { length: 255 }),
});

export const users = pgTable('users', {
  id: integer('id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  role: varchar('role', { length: 255 }),
});

export const task_assignments = pgTable('task_assignments', {
  id: integer('id').primaryKey(),
  taskId: integer('task_id').notNull().references(() => tasks.id, { onDelete: 'cascade' }),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
});

export const subtasks = pgTable('subtasks', {
  id: integer('id').primaryKey(),
  taskId: integer('task_id').notNull().references(() => tasks.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  priorityLevel: varchar('priority_level', { length: 255 }),
  dueDate: timestamp('due_date'),
  status: varchar('status', { length: 255 }),
});


// Relations
    
export const projectsRelations = relations(projects, ({ many }) => ({
  tasks: many(tasks),
}));

    
    
    
export const tasksRelations = relations(tasks, ({ one, many }) => ({
  project: one(projects, {
    fields: [tasks.projectid],
    references: [projects.id],
  }),
  task_assignments: many(task_assignments),
  subtasks: many(subtasks),
}));

    
export const usersRelations = relations(users, ({ many }) => ({
  task_assignments: many(task_assignments),
}));

    
    
export const taskAssignmentsRelations = relations(task_assignments, ({ one }) => ({
  task: one(tasks, {
    fields: [task_assignments.taskid],
    references: [tasks.id],
  }),
  user: one(users, {
    fields: [task_assignments.userId],
    references: [users.id],
  }),
}));

    
export const subtasksRelations = relations(subtasks, ({ one }) => ({
  task: one(tasks, {
    fields: [subtasks.taskid],
    references: [tasks.id],
  }),
}));


// Types
export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Task = typeof tasks.$inferSelect;
export type NewTask = typeof tasks.$inferInsert;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type TaskAssignment = typeof task_assignments.$inferSelect;
export type NewTaskAssignment = typeof task_assignments.$inferInsert;
export type Subtask = typeof subtasks.$inferSelect;
export type NewSubtask = typeof subtasks.$inferInsert;
