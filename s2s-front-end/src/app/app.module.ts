import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { PersonalInformationsComponent } from './personal-informations/personal-informations.component';
import { MotivationComponent } from './motivation/motivation.component';
import { QuestionsComponent } from './questions/questions.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { TSpaceComponent } from './t-space/t-space.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { EspaceComponent } from './espace/espace.component';
import { CardCoursComponent } from './card-cours/card-cours.component';
import { ListCardCoursComponent } from './list-card-cours/list-card-cours.component';
import { StarRatingModule } from 'angular-star-rating';
import { ESideMenuComponent } from './e-side-menu/e-side-menu.component';
import { EListSeancesComponent } from './e-list-seances/e-list-seances.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ESearchComponent } from './e-search/e-search.component';


const appRoutes:Routes=[
  {path:'',component:HomepageContentComponent},
  {path:'creation-compte',component:CreateAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'personal-informations',component:PersonalInformationsComponent},

  {path:'motivation',component:MotivationComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'side',component:SidebarComponent},
  {path:'tuteur',component:SideMenuComponent},
  {path:'search',component:ESearchComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'espace-tuteur',component:TSpaceComponent,children:[
    { path: 'creation-cours', component:CreateCourseComponent},
    { path: 'liste-cours', component:ListCoursesComponent},
  ]},{path:'espace-etudiant',component:EspaceComponent,children:[
    { path: 'list-seances', component:EListSeancesComponent}
  ]},
 ]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    CreateAccountComponent,
    LoginComponent,
    RecommendationsComponent,
    HomepageContentComponent,
    PersonalInformationsComponent,
    MotivationComponent,
    QuestionsComponent,
    SidebarComponent,
    SideMenuComponent,
    CreateCourseComponent,
    TSpaceComponent,
    ListCoursesComponent,
    EspaceComponent,
    CardCoursComponent,
    ListCardCoursComponent,
    ESideMenuComponent,
    EListSeancesComponent,
    ContactUsComponent,
    ESearchComponent,
   
  ],
  imports: [
    
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StarRatingModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
