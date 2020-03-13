import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PatternService {
  items: Pattern[] = [
    {
      name: "Template Method",
      description: "Subclasses decide how to implement steps in an algorithm"
    },{
      name: "Strategy",
      description: "Encapsulate interchangable behaviour and use delegation to descide which behaviour to use"
    }, {
      name: "Factory Method",
      description: "Subclasses decide which concrete classes to create"
    }, {
      name: "Decorator",
      description: "Doesn't Alter the interface, but adds responsibility"
    }, {
      name: "Adapter",
      description: "Converts one interface to another"
    }, {
      name: "Facade",
      description: "Makes the interface simpler"
    }
  ]
  
   /**
   * constructor() { }
   */
}

export interface Pattern {
  name : String;
  description: String;
}
