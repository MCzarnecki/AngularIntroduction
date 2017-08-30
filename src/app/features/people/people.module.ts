import { PeopleContainerComponent } from './people-container/people-container.component';
import { NgModule } from '@angular/core';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleAdderComponent } from './people-adder/people-adder.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/people.reducer';

const COMPONENTS = [PeopleContainerComponent, PeopleListComponent, PeopleAdderComponent];

@NgModule({
    declarations: [COMPONENTS],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('people', reducer),
    ]
})
export class PeopleModule { }
