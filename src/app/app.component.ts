import { Component } from '@angular/core';
import {PatternService} from './pattern.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'design-pattern-matching';
  selectedOption = [];
  submittedOption = [];
  result: string;

  submitted = false;

  wrong(idx: number): string{


    if(this.selectedOption[idx] == -1 || this.submittedOption[idx] != this.selectedOption[idx] ||
        (this.submittedOption[idx] == this.selectedOption[idx] &&
         this.selectedOption[idx] == idx)){
      return "hide";
    } 

    return "";
  }

  correct(idx: number): string{

    if(this.submittedOption[idx] == this.selectedOption[idx] &&
       this.selectedOption[idx] == idx){
      return "";
    } 

    return "hide";
  }

  disableSubmit(): boolean{
    return this.selectedOption.includes("-1");
  }

  submit(): void{
    if (!this.submitted){
      this.submitted = true;
    }

    let correct = 0;

    for(var i = 0; i< this.patterns.length; i++) { 
      this.submittedOption[i] = this.selectedOption[i];

      if (this.patterns[i].id == this.selectedOption[i]){
        correct++;
        console.log(this.patterns[i].name + " is correct!")
      } 


    }

    this.result = "You got " + correct + "/" + this.patterns.length + " right.";

    console.log(this.result)
  }

  patterns = []

  constructor(
    private patternService: PatternService
  ) { 
    this.patterns = patternService.items;
    for(var i = 0; i< this.patterns.length; i++) {
      this.selectedOption[i] = "-1";
    }
  }
  
}
