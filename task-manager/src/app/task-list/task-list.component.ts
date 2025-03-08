import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Написать отчет', description: 'Закончить ежемесячный отчет.', category: 'Работа', status: 'pending', deadline: new Date() },
    { id: 2, title: 'Купить продукты', description: 'Купить молоко и яйца.', category: 'Личное', status: 'pending', deadline: new Date() },
    { id: 3, title: 'Изучить Angular', description: 'Изучить маршрутизацию.', category: 'Учеба', status: 'pending', deadline: new Date() }
  ];

  onTaskCompleted(taskId: number) {
    this.tasks = this.tasks.map(task => {
      if (task.id === taskId) {
        task.status = 'completed';
      }
      return task;
    });
  }
}
