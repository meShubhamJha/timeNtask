import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.css'],
})
export class MytaskComponent {
  // create a json object to store the task detail like task name, task description, task status, due date, priority, missed
  task = {
    name: 'Task Name',
    description:
      'Complete the task by the due date and mark it as complete. If you miss the due date, it will be marked as missed.',
    status: 3,
    dueDate: '2020-12-31',
    priority: 'low',
  };

  // check task.priority and create a variable priority color to store the color code
  priorityColor = '';
  constructor() {
    console.log(this.task);
    if (this.task.priority === 'high') {
      this.priorityColor = 'red';
    } else if (this.task.priority === 'medium') {
      this.priorityColor = 'orange';
    } else if (this.task.priority === 'low') {
      this.priorityColor = 'green';
    }
  }

  updateTaskStatus(newStatus: number) {
    this.task.status = newStatus;
    console.log(this.task);
  }

  // use input decorator to store the task detail from parent component to child component in the form of json object
}
