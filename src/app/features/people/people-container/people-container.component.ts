import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromPeople from '../reducers/people.reducer';
import * as actions from '../actions/people.actions';
import { AddPeronAction } from '../actions/people.actions';
import { Person } from '../person';

@Component({
  selector: 'app-people-container',
  templateUrl: './people-container.component.html',
  styleUrls: ['./people-container.component.css']
})
export class PeopleContainerComponent implements OnInit {

  public people$: Observable<Person[]>;

    constructor(private store: Store<fromPeople.State>) {
      this.people$ = this.store.select(fromPeople.getPeopleCollection);
    }

    ngOnInit() {
      this.store.dispatch(new actions.LoadAction());
    }

    personAdded(event: Person) {
      this.store.dispatch(new AddPeronAction(event));
    }
}
