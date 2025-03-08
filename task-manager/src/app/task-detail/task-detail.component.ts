import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent extends BaseTaskComponent implements OnInit {
  constructor(private route: ActivatedRoute, private taskList: TaskListComponent) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const taskId = +params['id'];
      const task = this.taskList.tasks.find(t => t.id === taskId);
      if (task) {
        this.id = task.id;
        this.title = task.title;
        this.description = task.description;
        this.category = task.category;
        this.deadline = task.deadline;
      }
    });
  }
}
