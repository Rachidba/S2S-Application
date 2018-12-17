import { Component, OnInit, Input } from '@angular/core';
import { Cours } from '../models/Cours';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-cours',
  templateUrl: './card-cours.component.html',
  styleUrls: ['./card-cours.component.css']
})
export class CardCoursComponent implements OnInit {
  @Input() obj:Cours;
 
  label:string = '';
  constructor(private router:Router) { }

  ngOnInit() {

    
  }
  toString( val: number){

    return val.toString();
  }

  concat(note:string,rate:string){
    return ' ('+note +') '+rate;
  }
  btnClick(){
    this.router.navigateByUrl('/espace-etudiant/list-seances');
  }
}
