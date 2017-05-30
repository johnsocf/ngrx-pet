import {Routes} from "@angular/router";
import {CalendarOverviewComponent} from './components/calendar-overview/calendar-overview.component';
import {LifestyleOverviewComponent} from './components/lifestyle-overview/lifestyle-overview.component';
import {TasksComponent} from './components/tasks/tasks.component';

export const routes : Routes = [
  {
    path: 'calendar',
    component: CalendarOverviewComponent
  },
  {
    path: 'lifestyle',
    component: LifestyleOverviewComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
];
