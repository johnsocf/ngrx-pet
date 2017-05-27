import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';

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
    console.log('cha-chaaanges, calendar', changes);
    debugger;
    if (changes.tasks.currentValue) {
      console.log('tasks', this.tasks[0].timeDate);
      const firstDateTime = this.tasks[0].timeDate;
      const day = moment(firstDateTime).day();
      let groups = _.groupBy(changes.tasks.currentValue, function(date) {
        return moment(date.dateTime).date();
      })
      console.log('groups', groups);
      const todaysDay = moment().date();
      const todaysTasks = groups[todaysDay];
      this.tasksFromToday = todaysTasks;
      //this.tasksFromToday;
    }
  }

}
