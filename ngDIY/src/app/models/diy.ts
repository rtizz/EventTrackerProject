import { Location } from "./location";

export class Diy {
id : number;
task : string;
description : string;
diy : boolean;
interior : boolean;
estCost: number;
actual_cost: number;
dateEntered: string;
dateStarted: string;
dateFinished: string;
location: Location;

constructor(
  id : number = 0,
  task : string = '',
  description : string = '',
  diy : boolean = false,
  interior : boolean = false,
  estCost: number = 0,
  actual_cost: number = 0,
  dateEntered: string = '',
  dateStarted: string = '',
  dateFinished: string = '',
  location: Location = new Location()


){
  this.id = id;
  this.task = task;
  this.description = description;
  this.diy = diy;
  this.interior = interior;
  this.estCost = estCost;
  this.actual_cost = actual_cost;
  this.dateEntered = dateEntered;
  this.dateStarted = dateStarted;
  this.dateFinished = dateFinished;
  this.location = location;


}
}
