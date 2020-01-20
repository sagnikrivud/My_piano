import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KeyboardComponent} from './keyboard/keyboard.component';

//import {UserComponent} from './user/user.component';
import {FeedbackComponent} from './feedback/feedback.component';



const routes: Routes = [
{path : '', component : KeyboardComponent},  //path of component class routing in home page;
//{path : '', component : UserComponent},
{path : 'feedback', component : FeedbackComponent } //user componenet class routing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
