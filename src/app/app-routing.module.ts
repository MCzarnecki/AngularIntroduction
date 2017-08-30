import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PeopleContainerComponent } from './features/people/people-container/people-container.component';
import { IntemsContainerComponent } from './features/items/intems-container/intems-container.component';

const routes = [
    { path: '', redirectTo: 'items', pathMatch: 'full' },
    { path: 'items', component: IntemsContainerComponent, pathMath: 'full' },
    { path: 'people', component: PeopleContainerComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'items'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
