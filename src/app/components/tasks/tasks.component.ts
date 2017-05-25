import {Component, SimpleChanges, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/main-state';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input()
  petData: object;

  pet: any = {
    pooped: false,
    peed: false,
    watered: false,
    walked: false,
    fed: false,
    treats: true,
    played: true,
    brushed: true,
    dateTime: '2017-05-25T21:46:27.454Z',
    taskId: 12
  }
  tasksLogged: any = [];
  task: any = {};

  constructor(private store: Store <State>) { }

  ngOnInit() {
    this.pet = {
      pooped: false,
      peed: false,
      watered: false,
      walked: false,
      fed: false,
      treats: true,
      played: true,
      brushed: true,
      dateTime: '2017-05-25T21:46:27.454Z',
      taskId: 12
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes.petData.previousValue) {
      this.tasksLogged = changes.petData.currentValue.tasks;
    }
  }

  save(f) {
    debugger;
    console.log('save');
    this.store.dispatch({type: "ADD_NEW_TASK", payload: f});
  }

  boxChecked(event) {
    debugger;
    console.log('checked', event.target.checked);
    return !event.target.checked
  }

}
