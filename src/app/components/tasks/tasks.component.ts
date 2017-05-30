import {Component, SimpleChanges, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../store/state/application-state';
import * as _ from 'lodash';

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

  constructor(private store: Store <ApplicationState>) { }

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
    const taskLog = {...f, dateTime: new Date(), taskId: _.uniqueId()}
    console.log('save');
    this.store.dispatch({type: "ADD_NEW_TASK", payload: taskLog});
  }

  boxChecked(event) {
    console.log('checked', event.target.checked);
    return !event.target.checked
  }

}
