import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items-adder',
  templateUrl: './items-adder.component.html',
  styleUrls: ['./items-adder.component.css']
})
export class ItemsAdderComponent {

  @Output() item = new EventEmitter<Item>();

      newItem: Item;

      constructor() {
        this.newItem = new Item();
      }

      add() {
        this.item.emit(this.newItem);
        this.newItem = new Item();
      }

}
