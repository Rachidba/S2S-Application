import { Component, OnInit } from '@angular/core';
import { Seance } from '../models/Seance';
import { seances } from '../models/mockCours';

@Component({
  selector: 'app-e-list-seances',
  templateUrl: './e-list-seances.component.html',
  styleUrls: ['./e-list-seances.component.css']
})
export class EListSeancesComponent implements OnInit {

  constructor() { }
seancess:Seance[]= seances;
  ngOnInit() {
    
    }
    toString( val: number){

      return val.toString();
    }
    

  
  
}
