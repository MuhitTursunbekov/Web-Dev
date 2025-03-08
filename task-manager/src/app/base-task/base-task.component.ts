import { Component, Input } from '@angular/core';

export class BaseTask {
  @Input() id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() category!: string;
  @Input() status!: 'pending' | 'completed';
  @Input() deadline!: Date;
}

@Component({
  selector: 'app-base-task',
  template: '', // Базовый компонент не имеет шаблона
})
export class BaseTaskComponent extends BaseTask {}