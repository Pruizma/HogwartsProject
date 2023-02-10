import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hogwartsHouses : String[] = [
    'Griffindor',
    'Slytherin',
    'Huffelpuf',
    'Ravenclaw'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.hogwartsHouses, event.previousIndex, event.currentIndex);
  }

}
