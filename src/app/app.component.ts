import { Component } from '@angular/core';
import {PatternService} from './pattern.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'design-pattern-matching';
  selectedOption: number[] = [];
  result: string;

  submitted = false;

  submit(): void{

    let correct = 0;

    for(var i = 0; i< this.patterns.length; i++) { 
      if (this.patterns[i].id == this.selectedOption[i]){
        correct++;
        console.log(this.patterns[i].name + " is correct!")
      } 
    }

    this.result = "You got " + correct + "/" + this.patterns.length + " right.";

    console.log(this.result)

    if (!this.submitted){
      this.submitted = true;
    }
  }

  patterns = []

  constructor(
    private patternService: PatternService
  ) { 
    this.patterns = patternService.items
  }
  
}
