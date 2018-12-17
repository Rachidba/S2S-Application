import {Tuteur} from './Tuteur';
import { Seance } from './Seance';

export class Cours {
  idCours: number;
  titre: string;
  niveau : string; // facile, moyen, difficile 
  detailsCours : string;
  photo: string;
  video: string;
  rate:number;
  note: number;
  prix: number;
  tuteur:Tuteur;
  seances: Seance[];
}
