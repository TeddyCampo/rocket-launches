import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.scss']
})
export class RocketListComponent implements OnInit {

  @Input() nbOfLaunches: number;
  @Input() launches: any;
  @Output() launchClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onLaunchClick(id: number) {
    console.log("id: ", id);
  }
}
