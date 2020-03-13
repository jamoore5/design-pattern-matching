import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PatternService {
  items: Pattern[] = [
    {
      id: "0",
      name: "Template Method",
      description: "Subclasses decide how to implement steps in an algorithm"
    },{
      id: "1",
      name: "Strategy",
      description: "Encapsulate interchangable behaviour and use delegation to descide which behaviour to use"
    }, {
      id: "2",
      name: "Factory Method",
      description: "Subclasses decide which concrete classes to create"
    }, {
      id: "3",
      name: "Decorator",
      description: "Doesn't Alter the interface, but adds responsibility"
    }, {
      id: "4",
      name: "Adapter",
      description: "Converts one interface to another"
    }, {
      id: "5",
      name: "Facade",
      description: "Makes the interface simpler"
    }
  ]
  
   /**
   * constructor() { }
   */
}

export interface Pattern {
  id: String;
  name: String;
  description: String;
}
