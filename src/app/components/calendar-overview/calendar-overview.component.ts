import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../store/state/application-state';
import {StoreData} from "../../store/state/store-data";

@Component({
  selector: 'app-calendar-overview',
  templateUrl: './calendar-overview.component.html',
  styleUrls: ['./calendar-overview.component.css']
})
export class CalendarOverviewComponent {
  @Input()
  tasks: any = [];
  tasksFromToday: any = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tasks.currentValue) {
      const firstDateTime = this.tasks[0].timeDate;
      const day = moment(firstDateTime).day();
      let groups = _.groupBy(changes.tasks.currentValue, function(date) {
        return moment(date.dateTime).date();
      })
      const todaysDay = moment().date();
      const todaysTasks = groups[todaysDay];
      this.tasksFromToday = todaysTasks;
      //this.tasksFromToday;
    }
  }

}
