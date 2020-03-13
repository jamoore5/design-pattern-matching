import { Component } from '@angular/core';
import {PatternService} from './pattern.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'design-pattern-matching';

  patterns = []

  constructor(
    private patternService: PatternService
  ) { 
    this.patterns = patternService.items
  }
  
}
