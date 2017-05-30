import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../store/state/application-state';
import {StoreData} from "../../store/state/store-data";
import * as _ from 'lodash';


@Component({
  selector: 'app-lifestyle-overview',
  templateUrl: './lifestyle-overview.component.html',
  styleUrls: ['./lifestyle-overview.component.css']
})
export class LifestyleOverviewComponent {
  name: string = '';
  behavior: any = [];
  needs: any = {
    exercise: [],
    grooming: [],
    purchases: []
  };
  tasks: any = [];
  @Input()
  petData: object;
  constructor(private store: Store<ApplicationState>) {
    store.select<StoreData>('storeData')
      .subscribe((data: StoreData) => {
        this.petData = data.petInfo;
        if (this.petData) {
          const doggie = data.petInfo;
          this.name = doggie.name;
          this.needs.exercise = _.groupBy(doggie.needs, 'mainType').exercise;
          this.needs.grooming = _.groupBy(doggie.needs, 'mainType').grooming;
          this.needs.purchases = _.groupBy(doggie.needs, 'mainType').purchases;
          this.tasks = doggie.tasks;
          this.behavior = doggie.behavior;
        }
      });
  }

  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {

  }

}
