import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTab, MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedIndex: number = 0;

  clickedElement: Subscription = new Subscription();

  counter: number = 0;

  limite: number = 2;

  hogwartsHouses : {id: string, foto: string}[] = [
    { id:'Griffindor',
      foto: 'https://logos-world.net/wp-content/uploads/2021/08/Gryffindor-Logo.png'},
      { id:'Ravenclaw',
      foto: 'https://logos-world.net/wp-content/uploads/2022/11/Ravenclaw-Logo.png'},    
      { id:'Slytherin',
      foto: 'https://logos-world.net/wp-content/uploads/2022/02/Slytherin-Logo.png'},    
      { id:'Hufflepuff',
      foto: 'https://static.wikia.nocookie.net/pottermore/images/5/5e/Hufflepuff_crest.png'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.hogwartsHouses, event.previousIndex, event.currentIndex);
  }

  yourFn(event) {
    document.getElementById(`mat-tab-label-0-${this.counter}`).style.display = '';
    this.counter = this.selectedIndex;
    document.getElementById(`mat-tab-label-0-${this.selectedIndex}`).style.display = 'none';
  }

}
