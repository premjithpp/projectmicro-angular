import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SearchComponent} from './search/search.component';
import{TraineeLandingComponent} from './trainee-landing/trainee-landing.component';
import{TraineeCompleatedComponent} from './trainee-compleated/trainee-compleated.component';
import{TraineeCurrentComponent} from './trainee-current/trainee-current.component'
const routes: Routes = [
  {
    path:'search' , component:SearchComponent,
    
},
{
path:'trainee-landing',component:TraineeLandingComponent
},
{
  path:'trainee-compleated',component:TraineeCompleatedComponent
  },
  {
    path:'trainee-current',component:TraineeCurrentComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
