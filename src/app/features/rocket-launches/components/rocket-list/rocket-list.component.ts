import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.scss']
})
export class RocketListComponent implements OnInit {

  @Input() launches: any;
  @Output() launchSelectedd = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onLaunchClick(id: string) {
    this.launchSelectedd.emit(id);
  }
}
