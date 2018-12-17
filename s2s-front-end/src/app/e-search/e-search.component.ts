import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/Cours';
import { cours } from '../models/mockCours';

@Component({
  selector: 'app-e-search',
  templateUrl: './e-search.component.html',
  styleUrls: ['./e-search.component.css']
})
export class ESearchComponent implements OnInit {
cours:Cours[]=[]
size=0;
motCle='informatique';
  constructor() { }

  ngOnInit() {
    this.cours=cours;
    this.size=this.cours.length;
  }

}
