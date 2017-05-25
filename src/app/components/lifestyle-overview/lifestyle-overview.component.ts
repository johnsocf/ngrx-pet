import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
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
  @Input()
  petData: object;
  constructor() { }
  ngOnInit() {
    if (this.petData) {
      console.log('pet info in lifestyle overview component', this.petData);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.petData.previousValue) {
      console.log('chachacha...chaaaangees', changes.petData.currentValue);
      const doggie = _.values(changes.petData.currentValue)[0];
      console.log('group by', _.groupBy(doggie.needs, 'mainType'));
      this.name = doggie.name;
      this.needs.exercise = _.groupBy(doggie.needs, 'mainType').exercise;
      this.needs.grooming = _.groupBy(doggie.needs, 'mainType').grooming;
      this.needs.purchases = _.groupBy(doggie.needs, 'mainType').purchases;
      this.behavior = doggie.behavior;
    }
  }

}
