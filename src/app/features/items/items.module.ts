import { NgModule } from '@angular/core';
import { IntemsContainerComponent } from './intems-container/intems-container.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsAdderComponent } from './items-adder/items-adder.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsList2Component } from './items-list2/items-list2.component';

const COMPONENTS = [IntemsContainerComponent, ItemsListComponent, ItemsAdderComponent];

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [COMPONENTS,
    ItemsList2Component
],
})
export class ItemsModule { }
