import { Component } from '@angular/core';
import {PatternService} from './pattern.service';
import {Pattern} from './pattern.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  patterns: Pattern[] = []
  shuffledPatterns: Pattern[] = []
  selectedOptions = [];
  submittedOptions = [];
  result: string;

  wrong(idx: number): string{
    if(this.selectedOptions[idx] == -1 || this.submittedOptions[idx] != this.selectedOptions[idx] ||
        (this.submittedOptions[idx] == this.selectedOptions[idx] &&
         this.selectedOptions[idx] == idx)){
      return "hide";
    } 

    return "";
  }

  correct(idx: number): string{
    if(this.submittedOptions[idx] == this.selectedOptions[idx] &&
       this.selectedOptions[idx] == idx){
      return "";
    } 

    return "hide";
  }

  disableSubmit(): boolean{
    /* console.log(this.patterns.map(p => p.name)); */
    return this.selectedOptions.includes("");
  }

  remainingPatterns(idx: number): Pattern[]{
    let remainingPatterns : Pattern[] = [];

    for(var i = 0; i< this.patterns.length; i++) {
      if (this.selectedOptions[idx] == i.toString() || !this.selectedOptions.includes(i.toString())){
        remainingPatterns.push(this.patterns[i])
      }
    }

    return remainingPatterns;
  }

  shufflePattern(): Pattern[]{
    return Object.assign([], this.patterns).sort(() => Math.random() - 0.5);
  }

  calculateResult(): number{
    let correct = 0;

    for(var i = 0; i< this.patterns.length; i++) { 
      this.submittedOptions[i] = this.selectedOptions[i];

      if (i == this.selectedOptions[i]){
        correct++;
        console.log(this.patterns[i].name + " is correct!")
      } 
    }

    return correct;
  }

  setResult(correct: number): void{
    if (correct == this.patterns.length){
      this.result = "Congratulations, you got them all right!";
    }
    else if(correct == 0){
      this.result = "Sorry, you did not get any correct."
    }
    else{
      this.result = "You got " + correct + " out of " + this.patterns.length + " correct.";
    }
  }

  submit(): void{
    let correct = this.calculateResult();
    this.setResult(correct);
    console.log(this.result)
  }

  constructor(private patternService: PatternService) { 
    this.patterns = patternService.items;
    this.shuffledPatterns = this.shufflePattern();
    for(var i = 0; i< this.patterns.length; i++) {
      this.selectedOptions[i] = "";
    }
  }
}
