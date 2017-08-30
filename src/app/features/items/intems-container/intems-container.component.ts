import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from '../../../core/services/items.service';

@Component({
  selector: 'app-intems-container',
  templateUrl: './intems-container.component.html',
  styleUrls: ['./intems-container.component.css']
})
export class IntemsContainerComponent implements OnInit, OnDestroy {

  items: Item[] = [
    { name: 'item1', value: 'priceless' },
    { name: 'item2', value: 'you will never afford this' },
    { name: 'item3', value: 'pointless item' },
  ];

  constructor(private itemsSerivce: ItemsService) {
    itemsSerivce.items = this.items;
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

  itemAdded(item: Item) {
    this.items.push(item);
  }

}
