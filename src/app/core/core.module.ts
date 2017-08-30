import { NgModule } from '@angular/core';
import { ItemsService } from './services/items.service';

const SERVICES = [ItemsService];

@NgModule({
    providers: [SERVICES],
})
export class CoreModule { }
