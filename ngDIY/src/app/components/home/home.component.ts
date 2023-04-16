import { Diy } from 'src/app/models/diy';
import { DiyService } from './../../services/diy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  diys: Diy[] = [];

  constructor(
    private diy: DiyService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  reload() {
    this.diy.index().subscribe({
      next: (data) => {
        this.diys = data;
      },
      error: (fail) => {
        console.log(fail)
      }
    });
  }

}
