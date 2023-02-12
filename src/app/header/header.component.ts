import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialog() {
    this.dialog.open(HeaderComponentInfo);
  } 

  ngOnInit(): void {
  }

}

@Component({
  selector: 'lib-header-info',
  templateUrl: './header.component.info.html',
})
export class HeaderComponentInfo {}