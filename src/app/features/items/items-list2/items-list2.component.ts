import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from '../../../core/services/items.service';

@Component({
  selector: 'app-items-list2',
  templateUrl: './items-list2.component.html',
  styleUrls: ['./items-list2.component.css']
})
export class ItemsList2Component implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.items;
  }

}
