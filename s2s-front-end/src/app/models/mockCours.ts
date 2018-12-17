import { Cours } from './Cours';
import { Seance } from './Seance';

export const cours: Cours[] = [
    {
        idCours:1,
    titre : 'Guide complet des bonnes pratiques informatiques', niveau:'Facile', 
    detailsCours: ' Guide complet des bonnes pratiques informatiques contre les menaces et pour la sécurité informatique' , 
    photo:'assets/images/cours1.jpg' , video: '' , rate:4.2 , note : 10,prix:30.00 ,tuteur:{nom: 'BOUABDELLAH', prenom:'Imane'},
    seances:[{ dateSeance :  '01/04/2019' ,etat:1,description:  'description description description',emplacement: '2éme étage, Riad Essalam ,Mohammedia',idSeance: 1,type: 1},
    { dateSeance :  '02/04/2019' ,etat:1 ,description:  'description2 description2 description2',emplacement: '1éme étage, Quartier Shamess ,Mohammedia',idSeance: 2,type: 2}] },

    { idCours:2,titre : ' S\'initier aux mathématiques pour la finance et l\'économie', niveau:'Facile',detailsCours: 'Apprenez comment fonctionnent les calculs d\'intérêts bancaires pour les placements et emprunts. Convient aux débutants.', 
    photo:'assets/images/cours2.jpg',video: '', rate:3.5,note : 14,prix:35.50 , tuteur:{nom: 'BOUABDELLAH', prenom:'Imad'},
    seances: [{ dateSeance :  '01/02/2019' , etat:2,description:  '',emplacement: 'string',idSeance: 3,type: 1}] },
   
    { idCours:3,titre : ' Photoshop CC - Initiation à Avancé + Ateliers créatifs ', niveau:'Moyen',detailsCours: 'Apprentissage des outils et des photomontages et retouches sur Photoshop',
     photo:'assets/images/cours3.jpg',video: '',rate:2.7 ,note : 5,prix:37.50 ,  tuteur:{nom: 'personne3', prenom:'Imane'},
     seances:[{ dateSeance :  '01/01/2019' , etat:1,description:  '',emplacement: 'string',idSeance: 4,type: 1}] },
   
     { idCours:4,titre : 'Créer un Ebook & vendre en Automatique', niveau:'Difficile',detailsCours: 'Créer un Ebook & vendre en Automatique business automatique / vendre / écrire un ebook / business en ligne | Par Jason Raba', 
    photo:'assets/images/cours4.jpg',video: '',rate:1.2,note : 7,prix:49.99 ,  tuteur:{nom: 'tuteur4', prenom:'prenomtuteur'},
    seances:[{ dateSeance :  '24/12/2018' ,etat:1,description:  '',emplacement: 'string',idSeance: 5,type: 1}] },
];
export const seances: Seance[] =[
    { dateSeance :  '01/04/2019' ,etat:1,description:  'description description description',emplacement: '2éme étage, Riad Essalam ,Mohammedia',idSeance: 1,type: 1},
    { dateSeance :  '01/01/2019' ,etat:1,description:  'description2 description2 description2',emplacement: '1éme étage, Quartier Shamess ,Mohammedia',idSeance: 2,type: 2},
    { dateSeance :  '12/12/2018' ,etat:2,description:  '',emplacement: 'string',idSeance: 3,type: 1},
    { dateSeance :  '11/12/2018' ,etat:2,description:  '',emplacement: 'string',idSeance: 4,type: 1}
]