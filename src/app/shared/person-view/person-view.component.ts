import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss']
})
export class PersonViewComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  urlPhoto: string;

  @Output()
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
