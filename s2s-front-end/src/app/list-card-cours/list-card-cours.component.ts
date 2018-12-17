import { Component, OnInit } from '@angular/core';
import {cours} from '../models/mockCours';
import { Cours } from '../models/Cours';
@Component({
  selector: 'app-list-card-cours',
  templateUrl: './list-card-cours.component.html',
  styleUrls: ['./list-card-cours.component.css']
})
export class ListCardCoursComponent implements OnInit {

  constructor() { }
 course=[];
  ngOnInit() {
    this.course=this.chunk();
  }
  chunk(){
let i,j, chunkedArray=new Array();
for(i=0,j=cours.length;i<j;i+=3){
  chunkedArray.push(cours.slice(i,i+3));
 
  }
  console.log(chunkedArray);
  return chunkedArray;
  }

}
