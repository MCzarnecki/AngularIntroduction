/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemsList2Component } from './items-list2.component';

describe('ItemsList2Component', () => {
  let component: ItemsList2Component;
  let fixture: ComponentFixture<ItemsList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
