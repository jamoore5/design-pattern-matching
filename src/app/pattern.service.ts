import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PatternService {
  items: Pattern[] = [
    {
      name: "Abstract Factory",
      description: "Allows a client to create families of objects without specifying their concrete classes"
    }, {
      name: "Adapter",
      description: "Converts one interface to another"
    }, {
      name: "Command",
      description: "Encapsulates a request as an object"
    }, {
      name: "Composite",
      description: "Client treats collection of objects and individual objects uniformly"
    }, {
      name: "Decorator",
      description: "Doesn't alter the interface, but adds responsibility"
    }, {
      name: "Facade",
      description: "Makes the interface simpler"
    }, {
      name: "Factory Method",
      description: "Subclasses decide which concrete classes to create"
    }, {
      name: "Iterator",
      description: "Provides a way to traverse a collection of objects without exposing the collection's implementation"
    }, {
      name: "Observer",
      description: "Allow a group of objects to be notified when some state changes"
    }, {
      name: "Proxy",
      description: "Simplifies the interface to a set of classes"
    }, {
      name: "Singleton",
      description: "Ensures only one object is created"
    }, {
      name: "State",
      description: "Encapsulate state-based behaviour and delegate behaviour to the current state"
    }, {
      name: "Strategy",
      description: "Encapsulate interchangeable behaviour and use delegation to decide which behaviour to use"
    }, {
      name: "Template Method",
      description: "Subclasses decide how to implement steps in an algorithm"
    }   
  ]
  
   /**
   * constructor() { }
   */
}

export interface Pattern {
  name: String;
  description: String;
}
