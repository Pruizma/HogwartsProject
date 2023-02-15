import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

}
