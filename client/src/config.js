export const appConfig = {
  "name": "Task and Project Management System",
  "short": "FocusBoard",
  "description": "Organise project tasks by assignee, priority, due date, and progress status.",
  "collection": "tasks",
  "singular": "task",
  "fields": [
    {
      "name": "title",
      "label": "Task title",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "project",
      "label": "Project",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "assignee",
      "label": "Assignee",
      "type": "text",
      "required": true,
      "options": []
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "required": true,
      "options": [
        "Low",
        "Medium",
        "High"
      ]
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "required": true,
      "options": [
        "To Do",
        "In Progress",
        "Done"
      ]
    },
    {
      "name": "dueDate",
      "label": "Due date",
      "type": "date",
      "required": false,
      "options": []
    }
  ],
  "sample": [
    {
      "title": "Create API routes",
      "project": "Capstone MVP",
      "assignee": "Asha",
      "priority": "High",
      "status": "In Progress",
      "dueDate": "2026-11-05"
    }
  ]
};
