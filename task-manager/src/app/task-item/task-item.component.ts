import { Component, EventEmitter, Output } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() taskCompleted = new EventEmitter<number>();

  markCompleted() {
    this.status = 'completed';
    this.taskCompleted.emit(this.id);
  }
}