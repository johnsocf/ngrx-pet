/**
 * Created by cat on 5/24/17.
 */
import {Effect, Actions, toPayload} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

const onComplete = (error) => {
  console.log('error?', error);
}


@Injectable()
export class MainEffects {
  constructor(private action$: Actions, private af: AngularFireDatabase) {}

  @Effect() update$ = this.action$
    .ofType('SUPER_SIMPLE_EFFECT')
    .switchMap( () =>
      Observable.of({type: 'SUPER_SIMPLE_EFFECT_HAS_FINISHED'})
    );

  @Effect() effectWithPayloadExample$ = this.action$
    .ofType('SEND_PAYLOAD_TO_EFFECT')
    .map(toPayload)
    .switchMap(payload => {
      return Observable.of({type: "PAYLOAD_EFFECT_RESPONDS", payload: {message: 'The effect says hi!'}})
    });

  @Effect() timeEffect = this.action$
    .ofType('SET_TIMER')
    .map(toPayload)
    .switchMap(payload =>
      Observable.timer(payload.seconds * 1000)
        .switchMap(() =>
          Observable.of({type: "TIMER_FINISHED"})
        )
    )

  @Effect() pullArrayFromFirebase$ = this.action$
    .ofType('PULL_ARRAY_FROM_FIREBASE')
    .switchMap(() => {
      return this.af.object('/')
        .switchMap(result => {
          console.log('result', result);
            return Observable.of({type: "GOT_FIREBASE_ARRAY", payload: {petInfo: result}})
          }
        )
    });

  @Effect() addNewTask$ = this.action$
    .ofType('ADD_NEW_TASK')
    .map(toPayload)
    .switchMap(payload => {
      debugger;
      this.af.list('/Pets/0/tasks').push({
        "pooped": payload.poop,
        "walked": payload.walked
      });
       return Observable.of({type: 'TASK_ADDED'});
    });
}

