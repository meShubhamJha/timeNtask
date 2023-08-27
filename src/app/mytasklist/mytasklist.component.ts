import { Component } from '@angular/core';

@Component({
  selector: 'app-mytasklist',
  templateUrl: './mytasklist.component.html',
  styleUrls: ['./mytasklist.component.css'],
})
export class MytasklistComponent {
  // create a list of tasks that we just created in another file

  tasks = [
    {
      name: 'Task Name',
      description:
        'Complete the task by the due date and mark it as complete. If you miss the due date, it will be marked as missed.',
      status: 3,
      dueDate: '2020-12-31',
      priority: 'low',
    },
    // change this task to something else
    {
      name: 'Task Name 2',
      description:
        'Complete the task by the due date and mark it as complete. If you miss the due date, it will be marked as missed.',
      status: 2,
      dueDate: '2020-12-31',
      priority: 'medium',
    },
    // change this task to something else
    {
      name: 'Task Name 3',
      description:
        'Complete the task by the due date and mark it as complete. If you miss the due date, it will be marked as missed.',
      status: 1,
      dueDate: '2020-12-31',
      priority: 'high',
    },
  ];

  // now we want to pass this tasks to the child component
}
