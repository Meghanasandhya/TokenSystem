import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'register' ,component:RegisterComponent},
  {path:'login' ,component:LoginComponent},
  { path: 'form-example', component: FormExampleComponent },
  { path: 'details', component: DetailsComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
