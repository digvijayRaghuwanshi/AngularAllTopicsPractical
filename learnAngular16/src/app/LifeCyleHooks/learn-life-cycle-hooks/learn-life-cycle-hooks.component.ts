import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Angular-learn-life-cycle-hooks',
  templateUrl: './learn-life-cycle-hooks.component.html',
  styleUrls: ['./learn-life-cycle-hooks.component.scss'],
  standalone: true,
  imports: [LearnLifeCycleHooksComponent],
})
export class LearnLifeCycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
}
